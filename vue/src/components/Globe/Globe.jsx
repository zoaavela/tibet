// CustomGlobe.jsx
import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Globe.css";
import tibetGeo from "./tibet.json";

const ZOOM_DURATION = 2400;
const TARGET_ALTITUDE = 0.5;
const ROTATION_SPEED = 0.4;
const DRAG_THRESHOLD = 6;
const CLICK_MAX_DURATION = 300;

const TIBET_MARKER = { lat: 25.5, lng: 91.1, label: "TIBET" };
const TIBET_POLYGONS = tibetGeo.features;

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

  const isMobile = dimensions.width < 768;
  const baseView = { 
    lat: 20, 
    lng: 80, 
    altitude: isMobile ? 3.5 : 2.5 
  };

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

  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const tl = gsap.timeline();
    // Intro cinematic sequence
    tl.to(".intro-overlay", { opacity: 1, duration: 2, ease: "power2.inOut" })
      .to(".intro-text h1", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=0.5")
      .to(".intro-text p", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1")
      .to(".intro-overlay", { 
        opacity: 0, 
        duration: 2, 
        delay: 2, 
        ease: "power2.inOut",
        onComplete: () => setIntroFinished(true)
      })
      .to(containerRef.current, { opacity: 1, duration: 2, ease: "power2.inOut" }, "-=1")
      .fromTo(".ui-bottom", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=0.5");
  }, [ready]);

  const handleGlobeClick = () => {
    if (!introFinished || transitioning.current) return;
    
    // Zoom direct vers le centre
    transitioning.current = true;
    const globe = globeRef.current;
    if (!globe) return;
    const controls = globe.controls();
    controls.autoRotate = false;
    if (resetTimer.current) clearTimeout(resetTimer.current);

    globe.pointOfView({ lat: TIBET_MARKER.lat, lng: TIBET_MARKER.lng, altitude: TARGET_ALTITUDE }, ZOOM_DURATION);

    setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
        onComplete: () => navigate("/home"),
      });
    }, ZOOM_DURATION * 0.4);
  };

  return (
    <div className="globe-master-container">
      {/* Introduction Cinématique Overlay */}
      {!introFinished && (
        <div className="intro-overlay">
          <div className="intro-text">
            <h1 style={{ opacity: 0, transform: 'translateY(20px)' }}>Patrimoine du Tibet</h1>
            <p style={{ opacity: 0, transform: 'translateY(20px)' }}>Une immersion au cœur du toit du monde.</p>
          </div>
        </div>
      )}

      <div ref={containerRef} className="globe-fullscreen" style={{ opacity: 0 }}>
        <div className="globe-ui-container">
          <div className="ui-bottom">
            <span>Cliquez pour explorer</span>
          </div>
        </div>

        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          
          /* Texture minimaliste sombre */
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,0)"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          /* DA du site : Blanc & Or */
          showAtmosphere={true}
          atmosphereColor="#A68966"
          atmosphereAltitude={0.25}
          
          /* Zone Tibet détaillée (GeoJSON) */
          polygonsData={TIBET_POLYGONS}
          polygonAltitude={0.001} /* Pratiquement plat sur le globe */
          polygonCapColor={() => hovered ? "rgba(166, 137, 102, 0.5)" : "rgba(166, 137, 102, 0.2)"}
          polygonSideColor={() => "rgba(166, 137, 102, 0.05)"}
          polygonStrokeColor={() => "#A68966"}
          polygonLabel={() => ""}
          onPolygonClick={handleGlobeClick} /* On utilise la même logique d'entrée */
          onPolygonHover={(poly) => {
            setHovered(!!poly);
            if (containerRef.current) containerRef.current.style.cursor = poly ? "pointer" : "grab";
          }}
          
          /* "Le Piquet" - Marqueur Tibet */
          htmlElementsData={[TIBET_MARKER]}
          htmlLat="lat"
          htmlLng="lng"
          htmlElement={() => {
            const el = document.createElement("div");
            el.className = "tibet-piquet";
            el.innerHTML = `
              <div class="piquet-label">TIBET</div>
            `;
            return el;
          }}

          /* Interactions Globe Globale */
          onGlobeClick={handleGlobeClick}
          onGlobeHover={(obj) => {
            if (containerRef.current) containerRef.current.style.cursor = introFinished ? "pointer" : "default";
          }}
        />
      </div>
    </div>
  );
}