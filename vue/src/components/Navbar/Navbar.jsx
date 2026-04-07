import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "navigation", label: "Culture", sub: "Exploration thématique" },
  { id: "objet", label: "L'Objet", sub: "Collection & Artefacts" },
  { id: "archives", label: "Archives", sub: "Fonds documentaire" },
];

function KnotMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <rect x="12" y="2" width="16" height="36" rx="3" />
      <rect x="2" y="12" width="36" height="16" rx="3" />
      <rect x="16" y="8" width="8" height="24" rx="2" />
      <rect x="8" y="16" width="24" height="8" rx="2" />
    </svg>
  );
}

const MEGA_CONTENT = {
  navigation: {
    label: "Exploration",
    title: "Culture",
    text: "Immergez-vous dans les Savoirs, le Vivant et les Récits du Tibet.",
    items: [
      { num: "01", name: "Atlas", sub: "Savoirs & Artisanat", path: "/atlas" },
      { num: "02", name: "Société", sub: "Peuple & Nature", path: "/society" },
      { num: "03", name: "Chroniques", sub: "Histoire & Récit", path: "/chronicles" },
    ],
  },
  archives: {
    label: "Fonds documentaire",
    title: "Archives",
    text: "Sources, appuis multimédia et bibliographiques.",
    items: [
      { num: "I", name: "Galerie", sub: "Images & Vidéos", path: "/galerie" },
      { num: "II", name: "Sources", sub: "Bibliographie", path: "/sources" },
      { num: "III", name: "Glossaire", sub: "Vocabulaire", path: "/glossaire" },
    ],
  },
  objet: {
    label: "Collection & Artefacts",
    title: "L'Objet",
    text: "Explorez un Phurba avec annotations documentaires.",
    items: [
      { num: "3D", name: "Représentation 3D", sub: "Interaction immersive", path: "/exploration#" },
      { num: "TXT", name: "L'Article", sub: "Analyse & Symbolique", path: "/exploration#article" },
    ],
  },
};

export default function Navbar({ currentPage = "home", onNavigate }) {
  const [openMega, setOpenMega] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  // --- Reset mobile menu on route change ---
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // --- Scroll Tracking pour Hide On Scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNav(true); // Toujours visible tout en haut
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // Cache quand on descend
        setOpenMega(null); // Optionnel : referme le menu si on scrolle fort
      } else {
        setShowNav(true); // Affiche quand on remonte
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // --- Click Outside ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMega(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLinkClick(id) {
    setOpenMega(null);
    if (id === "objet") {
      navigate("/exploration");
    } else if (id === "navigation") {
      navigate("/menu");
    } else if (id === "archives") {
      navigate("/archives");
    }
  }

  function handleMouseEnter(id) {
    setOpenMega(id);
  }

  function handleMegaItemClick(path) {
    setOpenMega(null);
    const [targetPath, targetHash] = path.split("#");

    // Si on est déjà sur la page cible, on force le scroll
    if (window.location.pathname === targetPath) {
      if (targetHash) {
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Cas de l'ancre vide ou retour en haut
        const snapContainer = document.querySelector('.explore-page-snap-container, .home-wrapper');
        if (snapContainer) {
          snapContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  }

  const mega = openMega ? MEGA_CONTENT[openMega] : null;

  return (
    <>
      <header
        className={`mh-root${showNav ? "" : " hidden"}${isMobileMenuOpen ? " mobile-open" : ""}`}
        data-theme={theme}
        ref={navRef}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="mh-bar">

          {/* Logo */}
          <button className="mh-logo" onClick={() => {
            const targetPath = "/home";
            if (window.location.pathname === targetPath) {
              const snapContainer = document.querySelector('.explore-page-snap-container, .home-wrapper');
              if (snapContainer) {
                snapContainer.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }
            setOpenMega(null);
            navigate(targetPath);
          }}>
            <KnotMark />
            Immersion au Tibet
          </button>

          {/* Nav (Desktop) */}
          <nav className="mh-nav desktop-only">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`mh-link${currentPage === link.id || openMega === link.id ? " active" : ""}`}
                onMouseEnter={() => handleMouseEnter(link.id)}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="mh-right">
            <button
              className="mh-btn desktop-only"
              title="Changer de thème"
              onClick={() => { setOpenMega(null); toggleTheme(); }}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Hamburger Mobile */}
            <button 
              className={`mh-burger ${isMobileMenuOpen ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>

          {/* Mobile Drawer */}
          <div className={`mh-mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="mh-drawer-content">
              {Object.keys(MEGA_CONTENT).map((key) => {
                const section = MEGA_CONTENT[key];
                return (
                  <div key={key} className="drawer-section">
                    <p className="drawer-section-label">{section.label}</p>
                    <div className="drawer-items">
                      {section.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="drawer-item"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="drawer-item-num">{item.num}</span>
                          <span className="drawer-item-name">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              <div className="drawer-footer">
                <button 
                  className="drawer-theme-toggle" 
                  onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                >
                  Mode {theme === "dark" ? "Clair" : "Sombre"}
                </button>
              </div>
            </div>
          </div>

          {/* Mega panel */}
          <div className={`mh-mega${openMega ? " open" : ""}`}>
            {mega && (
              <div className="mh-mega-inner">
                <div className="mh-mega-desc">
                  <p className="mh-mega-label">{mega.label}</p>
                  <h2 className="mh-mega-title">{mega.title}</h2>
                  <p className="mh-mega-text">{mega.text}</p>
                </div>
                <div className="mh-mega-links">
                  {mega.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className="mh-mega-item"
                      onClick={() => handleMegaItemClick(item.path)}
                    >
                      <span className="mh-mega-num">{item.num}</span>
                      <span className="mh-mega-name">{item.name}</span>
                      <span className="mh-mega-sub">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </header>
    </>
  );
}
