// CustomGlobe.jsx
import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Globe.css";

const ZOOM_DURATION = 2400;
const TARGET_ALTITUDE = 0.5;
const ROTATION_SPEED = 0.4;
const DRAG_THRESHOLD = 6;
const CLICK_MAX_DURATION = 300;

const pointsData = [
  {
    lat: 29.6525,
    lng: 91.1721,
    size: 1.5,
    color: "#e3e0d8",
    label: "LHASSA",
  },
];

export default function CustomGlobe() {
  const globeRef = useRef();
  const navigate = useNavigate();
  const resetTimer = useRef(null);
  const pointerStart = useRef({ x: 0, y: 0, time: 0 });
  const pointerMoved = useRef(false);
  const transitioning = useRef(false);
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [ready, setReady] = useState(false);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseView = { lat: 20, lng: 80, altitude: 2.5 };

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    globe.pointOfView(baseView, 0);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = ROTATION_SPEED;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI * 0.3;
    controls.maxPolarAngle = Math.PI * 0.7;

    const onStart = () => {
      controls.autoRotate = false;
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
    const onEnd = () => {
      resetTimer.current = setTimeout(() => {
        globe.pointOfView(baseView, 3000);
        controls.autoRotate = true;
      }, 3000);
    };

    controls.addEventListener("start", onStart);
    controls.addEventListener("end", onEnd);

    setTimeout(() => setReady(true), 100);

    return () => {
      controls.removeEventListener("start", onStart);
      controls.removeEventListener("end", onEnd);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  useEffect(() => {
    const onDown = (e) => {
      pointerStart.current = { x: e.clientX, y: e.clientY, time: Date.now() };
      pointerMoved.current = false;
    };
    const onMove = (e) => {
      const dx = Math.abs(e.clientX - pointerStart.current.x);
      const dy = Math.abs(e.clientY - pointerStart.current.y);
      if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) pointerMoved.current = true;
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const tl = gsap.timeline();
    tl.to(containerRef.current, { opacity: 1, duration: 2, ease: "power2.inOut" })
      .fromTo(".ui-top", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=1")
      .fromTo(".ui-bottom", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5");
  }, [ready]);

  const handlePointClick = (point) => {
    if (pointerMoved.current) return;
    if (Date.now() - pointerStart.current.time > CLICK_MAX_DURATION) return;
    if (transitioning.current) return;

    transitioning.current = true;
    const globe = globeRef.current;
    const controls = globe.controls();
    controls.autoRotate = false;
    if (resetTimer.current) clearTimeout(resetTimer.current);

    globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: TARGET_ALTITUDE }, ZOOM_DURATION);

    setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => navigate("/accueil"),
      });
    }, ZOOM_DURATION * 0.6);
  };

  return (
    <div ref={containerRef} className="globe-fullscreen" style={{ opacity: 0 }}>

      {/* UI parfaitement centrée */}
      <div className="globe-ui-container">
        <div className="ui-top">
          <span className="subtitle">Héritage Vajrayāna</span>
          <h1>Phurba</h1>
        </div>

        <div className="ui-bottom">
          <div className={`hint-dot ${hovered ? "active" : ""}`}></div>
          <span>Entrer</span>
        </div>
      </div>

      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#ffffff"
        atmosphereAltitude={0.15}
        pointsData={pointsData}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={0.01}
        pointRadius={(d) => (hovered ? d.size * 1.2 : d.size)}
        pointColor="color"
        pointResolution={32}
        onPointClick={handlePointClick}
        onPointHover={(pt) => {
          setHovered(!!pt);
          if (containerRef.current) containerRef.current.style.cursor = pt ? "pointer" : "grab";
        }}
        htmlElementsData={pointsData}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.className = "marker-simple";
          el.innerHTML = d.label;
          return el;
        }}
      />
    </div>
  );
}