import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, Environment, Center } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Footer from "../../components/Footer/Footer";
import "./Exploration.css";

const POINTS = [
    { id: 1, pos: [0.01, 0.2, 0.1], title: "Vajrakīlaya", desc: "Trois visages scrutant le temps. Aucune colère, seulement l'éveil absolu." },
    { id: 2, pos: [0, 0.1, 0], title: "Le Nœud", desc: "La poignée unit le ciel et la terre, canalisant l'intention du moine." },
    { id: 3, pos: [0, -1.2, 0], title: "La Triple Lame", desc: "Elle transmute instantanément l'ignorance, le désir et la haine au contact du sol." }
];

function DaggerWithHotspots({ activePoint, setActivePoint }) {
    const { scene } = useGLTF("/tibetan_dagger.glb");
    const groupRef = useRef();

    useEffect(() => {
        if (groupRef.current) {
            gsap.fromTo(groupRef.current.rotation,
                { y: -Math.PI },
                { y: 0, duration: 2.5, ease: "power3.out" }
            );
        }
    }, []);

    return (
        <group ref={groupRef} scale={6} position={[-1, 0, 0]}>
            <Center>
                <primitive object={scene} />
                {POINTS.map((pt) => (
                    <Html key={pt.id} position={pt.pos} center zIndexRange={[100, 0]}>
                        <div
                            className={`glow-dot ${activePoint?.id === pt.id ? "active" : ""}`}
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                setActivePoint(pt);
                            }}
                        />
                    </Html>
                ))}
            </Center>
        </group>
    );
}

export default function Exploration() {
    const [activePoint, setActivePoint] = useState(null);
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="explore-page-snap-container">
            {/* --- SECTION 1 : SCÈNE 3D IMMERSIVE --- */}
            <section id="scene-3d" className="explore-3d-scene">
                <div className="explore-overlay">
                    <div className="museum-label">
                        <div className="label-meta">
                            <span className="label-number">01</span>
                            <span className="label-category">ARTEFACT</span>
                        </div>
                        <h1 className="label-title">Phurba</h1>
                        <div className="label-divider"></div>
                    </div>

                    {activePoint && (
                        <div className="point-card">
                            <h3>{activePoint.title}</h3>
                            <p>{activePoint.desc}</p>
                            <button onClick={() => setActivePoint(null)}>✕</button>
                        </div>
                    )}
                </div>

                <div className={`drag-hint ${showHint ? "visible" : "hidden"}`}>
                    <div className="drag-icon">↔</div>
                    <span>Glisez pour explorer</span>
                </div>

                <Canvas className="canvas-3d" camera={{ position: [0, 0, 5], fov: 40 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 10]} intensity={2.5} />
                    <Environment preset="studio" />
                    <Suspense fallback={null}>
                        <DaggerWithHotspots activePoint={activePoint} setActivePoint={setActivePoint} />
                    </Suspense>
                    <OrbitControls
                        makeDefault
                        enablePan={false}
                        enableZoom={false}
                        minDistance={3}
                        maxDistance={8}
                        dampingFactor={0.05}
                        target={[-1, 0, 0]}
                    />
                </Canvas>

                {/* Suggère le scroll vers l'article */}
                <div className="explore-scroll-indicator">
                    <span className="scroll-line"></span>
                    <span>Documentation</span>
                </div>
            </section>

            {/* --- SECTION 2 : ARTICLE DOCUMENTAIRE --- */}
            <section id="article" className="explore-article">
                <div className="article-inner">
                    <header className="article-header">
                        <span className="article-meta">Documentaire</span>
                        <h2 className="article-title">L'esthétique de la terreur au service de la paix.</h2>
                    </header>

                    <div className="article-body">
                        <p className="article-intro">
                            Au premier regard, le Phurba glace le sang. Avec sa lame à trois tranchants et son manche orné de têtes de divinités courroucées, cet objet emblématique de l'Himalaya ressemble à une arme de guerre ou de sorcellerie noire. Pourtant, il incarne l’exact opposé : une violence symbolique destinée à protéger la paix.
                        </p>

                        <div className="article-text">
                            <p>
                                Ce paradoxe est au cœur de ce que l'historien de l'art Rob Linrothe appelle la "compassion impitoyable". Le Phurba n'est pas conçu pour blesser les êtres vivants, mais pour "assassiner" l'ego. Ses trois lames transpercent métaphoriquement les "Trois Poisons" mentaux : l'ignorance, l'attachement et la haine. Il ne tue pas l'ennemi extérieur, mais "cloue" les démons intérieurs qui tourmentent l'esprit.
                            </p>
                            <p>
                                En anthropologie, il agit comme un <em>Axis Mundi</em> (poteau cosmique) : planté dans le sol, il stabilise le chaos environnant. Psychologiquement, comme le soulignent les approches jungiennes, il permet au pratiquant de faire face à sa propre "Ombre" au lieu de la fuir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER INTÉGRÉ (Évite les bugs de layout) --- */}
            <footer className="explore-footer-wrapper">
                <Footer />
            </footer>
        </div>
    );
}