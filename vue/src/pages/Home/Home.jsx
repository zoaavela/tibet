// Home.jsx
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import image1 from '../../assets/home/2.avif';
import image2 from '../../assets/home/3.png';
import image3 from '../../assets/home/4.avif';

export default function Home() {
    return (
        <div className="home-wrapper">

            {/* ── HERO IMMERSIF (LAYOUT RAFFINÉ) ────────── */}
            <header className="hero-immersive">
                <div className="hero-overlay" />

                {/* Contenu principal */}
                <div className="hero-content">
                    {/* Côte gauche : Petit titre et description */}
                    <div className="hero-left-side">
                        <h3 className="hero-side-title">Sagesse & Terre d'Éveil</h3>
                        <p className="hero-side-desc">
                            Une immersion thématique au cœur de la civilisation tibétaine,
                            traversant l'art rituel et les sciences de l'esprit.
                        </p>
                    </div>
                </div>

                <a href="#heritage" className="hero-scroll" aria-label="Défiler vers le bas">
                    <span className="hero-scroll-line" />
                    <span>Défiler</span>
                </a>
            </header>

            {/* ── 01 : UN HERITAGE (Culture) ───────────── */}
            <section id="heritage" className="nav-section section-heritage">
                <div className="section-grid-standard">
                    <div className="content-box">
                        <span className="num">CULTURE</span>
                        <div className="text-side">
                            <h2>L'esprit de l'Himalaya</h2>
                            <p>
                                Plongez au cœur de l'identité tibétaine. Des hauts plateaux du Changtang à la calligraphie sacrée,
                                découvrez une civilisation millénaire où la spiritualité, l'artisanat et les cycles de la nature
                                s'entrelacent pour former un héritage unique au monde.
                            </p>
                            <Link to="/menu" className="explore-btn">Explorer la culture</Link>
                        </div>
                    </div>
                    <div className="image-side">
                        <img
                            src={image1}
                            alt="Paysage et monastère tibétain"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            {/* ── 02 : LE PHURBA (CORRIGÉ - LAYOUT STACKED PROPRE & IMAGE AGRANDIE) ─ */}
            <section className="nav-section section-objet">
                <div className="objet-clean-stacked-layout">

                    {/* 1. Titre Phurba : En haut, centré, propre */}
                    <h2 className="section-main-title">ཕུར་པ།</h2>

                    {/* 2. Bloc Image : Juste en dessous du mot Phurba, sans fond, plus grand */}
                    <div className="image-side museum-frame">
                        <img
                            src={image2}
                            alt="Phurba — Dague rituelle du Vajrayāna"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* 3. Bloc Texte : En dessous de l'image */}
                    <div className="content-box">
                        <span className="num">Focus sur l'objet</span>
                        <div className="text-side">
                            <h2 className="sr-only">L'orfèvrerie du vide</h2> {/* Masqué mais présent */}
                            <p>
                                La dague à trois pans qui cloue les démons de l'ego. Objet de puissance
                                et de libération au cœur du tantrisme tibétain.
                            </p>
                            <Link to="/exploration" className="explore-btn btn-objet">Analyser l'objet</Link>
                        </div>
                    </div>

                </div>
            </section>




            {/* ── 03 : LES ARCHIVES (DA Standard) ─────────── */}
            <section className="nav-section section-archives">
                <div className="section-grid-standard">
                    <div className="image-side">
                        <img
                            src={image3}
                            alt="Manuscrits et archives tibétaines"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="content-box">
                        <span className="num">Fonds documentaire</span>
                        <div className="text-side">
                            <h2>La mémoire du Tibet</h2>
                            <p>
                                Parcourez nos ressources documentaires : galeries photographiques inédites,
                                sources bibliographiques et archives multimédia. Le socle de notre immersion
                                au cœur de la civilisation tibétaine.
                            </p>
                            <Link to="/galerie" className="explore-btn">Consulter les archives</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER INTÉGRÉ AU SNAP ── */}
            <Footer />

        </div>
    );
}