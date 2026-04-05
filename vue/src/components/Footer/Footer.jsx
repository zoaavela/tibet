// Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const scrollToTop = () => {
        // Détecte si nous sommes dans un conteneur avec snap (Home ou Exploration)
        const snapContainer = document.querySelector('.explore-page-snap-container, .home-wrapper');
        if (snapContainer) {
            snapContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="aesthetic-footer">
            <div className="footer-content">
                {/* ── Brand Section ── */}
                <div className="footer-brand">
                    <div className="footer-logo-wrapper">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <rect x="12" y="2" width="16" height="36" rx="3" />
                            <rect x="2" y="12" width="36" height="16" rx="3" />
                            <rect x="16" y="8" width="8" height="24" rx="2" />
                            <rect x="8" y="16" width="24" height="8" rx="2" />
                        </svg>
                        <span className="footer-title">Immersion au Tibet</span>
                    </div>
                    <p className="footer-mission">
                        Préserver et diffuser l'héritage vivant du Toit du Monde à travers l'immersion numérique et l'analyse 3D.
                    </p>
                </div>

                {/* ── Navigation Sections (3 Columns) ── */}
                <div className="footer-nav">
                    {/* Culture */}
                    <div className="footer-column">
                        <span className="footer-label">Culture</span>
                        <Link to="/atlas" className="footer-link">Atlas</Link>
                        <Link to="/society" className="footer-link">Society</Link>
                        <Link to="/chronicles" className="footer-link">Chronicles</Link>
                    </div>
 
                    {/* Immersion */}
                    <div className="footer-column">
                        <span className="footer-label">Immersion</span>
                        <Link to="/exploration" className="footer-link">Exploration 3D</Link>
                        <Link to="/archives" className="footer-link">Fonds Archives</Link>
                        <Link to="/home" className="footer-link" onClick={(e) => {
                            if (window.location.pathname === "/home") {
                                scrollToTop();
                            }
                        }}>Accueil</Link>
                    </div>
 
                    {/* Savoirs */}
                    <div className="footer-column">
                        <span className="footer-label">Savoirs</span>
                        <Link to="/galerie" className="footer-link">Galerie Media</Link>
                        <Link to="/sources" className="footer-link">Bibliographie</Link>
                        <Link to="/glossaire" className="footer-link">Glossaire</Link>
                    </div>

                    {/* Auteurs */}
                    <div className="footer-column">
                        <span className="footer-label">Auteurs</span>
                        <span className="footer-author">Soumiyya Gbadagni</span>
                        <span className="footer-author">Enzo Abdi</span>
                        <span className="footer-author">Charly Janvier</span>
                    </div>
                </div>

                {/* ── Action Section ── */}
                <div className="footer-action">
                    <button onClick={scrollToTop} className="back-to-top">
                        ↑ Revoir le ciel
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} — Mission d'Étude Tibet. Tous droits réservés.</p>
                <div className="footer-legal">
                    <span>Expérience Immersive</span>
                </div>
            </div>
        </footer>
    );
}