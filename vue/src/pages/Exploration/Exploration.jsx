import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, Environment, Center } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Footer from "../../components/Footer/Footer";
import "./Exploration.css";

const POINTS = [
    { id: 1, pos: [0, 13, 0], title: "Vajrakīlaya", desc: "Représente le sommet spirituel de l'instrument, incarnant la divinité courroucée Vajrakīlaya. Ses trois visages scrutent simultanément le passé, le présent et le futur pour identifier les obstacles karmiques. Ils symbolisent la transmutation radicale des trois poisons — l'ignorance, le désir et l'aversion — en sagesses libératrices, manifestant une puissance qui n'est pas mue par la colère, mais par un éveil absolu et une compassion féroce capable de briser les cycles de la souffrance." },
    { id: 2, pos: [0, 0, 0], title: "Le Nœud", desc: "Ce nœud central constitue le point de jonction sacré où se rencontrent les forces du ciel et de la terre. Il agit comme un stabilisateur métaphysique, permettant au pratiquant de canaliser son intention pure à travers l'instrument. En symbolisant l'interdépendance de toutes choses et l'union indissociable de la vacuité et de la manifestation, il transforme la poignée en un canal d'énergie inébranlable, concentrant la puissance spirituelle avant qu'elle ne soit projetée vers la lame." },
    { id: 3, pos: [0, -32, 0], title: "La Triple Lame", desc: "La forme triple de cette lame n'est pas destinée à trancher la chair, mais à clouer définitivement les énergies négatives qui entravent le chemin spirituel. Chaque pan de la pyramide inversée s'attaque à une racine de l'ego : l'ignorance qui aveugle, le désir qui enchaîne et la haine qui détruit. Lorsqu'elle pénètre symboliquement le sol, elle transmute instantanément ces poisons en nectar de sagesse, libérant ainsi l'esprit de ses attaches mondaines pour révéler la clarté originelle." },
    { id: 4, pos: [0, -15, 0], title: "Le Makara", desc: "Créature mythologique primordiale, le Makara est une chimère puissante combinant la force de l'éléphant, la ténacité du crocodile et la puissance du dragon. En surgissant pour enserrer la base de la lame entre ses mâchoires, il incarne la détermination inébranlable nécessaire à la pratique. Il représente la domination des forces élémentaires et la protection féroce des enseignements, assurant que l'action de la lame est soutenue par une force indestructible contre toute forme de corruption." }
];

function DaggerWithHotspots({ activePoint, setActivePoint, isLocating }) {
    // Assurez-vous que le fichier se nomme phurba.glb dans votre dossier public
    const { scene } = useGLTF("/dagger.glb");
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
        <group ref={groupRef} scale={0.05} position={[0, 0, 0]}>
            <Center>
                <primitive object={scene} />
                {POINTS.map((pt) => (
                    <Html key={pt.id} position={pt.pos} center zIndexRange={[100, 0]}>
                        <div
                            className={`glow-dot ${activePoint?.id === pt.id ? "active" : ""} ${isLocating ? "locating" : ""} ${activePoint ? "mobile-hidden" : ""}`}
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

// Préchargement du modèle pour éviter les lags au montage
useGLTF.preload("/dagger.glb");

export default function Exploration() {
    const [activePoint, setActivePoint] = useState(null);
    const [showHint, setShowHint] = useState(true);
    const [isLocating, setIsLocating] = useState(false);

    const handleLocate = () => {
        setIsLocating(true);
        setTimeout(() => setIsLocating(false), 1200);
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`explore-page-snap-container ${activePoint ? "no-snap" : ""}`}>
            {/* --- SECTION 1 : SCÈNE 3D IMMERSIVE --- */}
            <section id="scene-3d" className="explore-3d-scene">
                <div className="explore-overlay">
                    {/* Laser Scan Effect */}
                    <div className={`scan-line ${isLocating ? "active" : ""}`} />

                    <div className="museum-label">
                        <div className="label-meta">
                            <span className="label-number">01</span>
                            <span className="label-category">ARTEFACT</span>
                        </div>
                        <h1 className="label-title">Phurba</h1>
                        <div className="label-divider"></div>

                        <button
                            className={`locate-btn ${isLocating ? "active" : ""}`}
                            onClick={handleLocate}
                            title="Localiser les points d'intérêt"
                        >
                            <span className="locate-icon">◈</span>
                            <span className="locate-text">Scanner l'artefact</span>
                        </button>
                    </div>

                    {activePoint && (
                        <div 
                            className="info-side-panel"
                            onWheel={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                        >
                            <div className="side-panel-header">
                                <span className="panel-category">Détail Artefact</span>
                                <button className="close-panel" onClick={() => setActivePoint(null)}>✕</button>
                            </div>
                            <div className="panel-content">
                                <h3>{activePoint.title}</h3>
                                <div className="panel-divider"></div>
                                <p>{activePoint.desc}</p>
                            </div>
                        </div>
                    )}
                </div>



                <div className={`drag-hint ${showHint ? "visible" : "hidden"}`}>
                    <div className="drag-icon">↔</div>
                    <span>Glissez pour explorer</span>
                </div>

                <Canvas className="canvas-3d" camera={{ position: [0, 1.2, 4.5], fov: 40 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 10]} intensity={2.5} />
                    <Environment preset="studio" />
                    <Suspense fallback={null}>
                        <DaggerWithHotspots activePoint={activePoint} setActivePoint={setActivePoint} isLocating={isLocating} />
                    </Suspense>
                    <OrbitControls
                        makeDefault
                        enablePan={false}
                        enableZoom={false}
                        minDistance={1.5}
                        maxDistance={12}
                        dampingFactor={0.05}
                        target={[0, 0, 0]}
                    />
                </Canvas>

                <div className="explore-scroll-indicator">
                    <span>Documentation</span>
                    <span className="scroll-line"></span>
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
                                En anthropologie, il agit comme un <em>Axis Mundi</em> : planté dans le sol, il stabilise le chaos environnant. Psychologiquement, comme le soulignent les approches jungiennes, il permet au pratiquant de faire face à sa propre "Ombre" au lieu de la fuir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="explore-footer-wrapper">
                <Footer />
            </footer>
        </div>
    );
}