import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Globe from "./components/Globe/Globe";
import Home from "./pages/Home/Home";
import Exploration from "./pages/Exploration/Exploration";
import Sources from "./pages/Sources/Sources";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Glossary from "./pages/Glossary/Glossary";
import ArchiveHub from "./pages/Archives/ArchiveHub";
import Chronicles from "./pages/Chronicles/Chronicles";
import Menu from "./pages/Menu/Menu";
import { ThemeProvider } from "./contexts/ThemeContext";
import Atlas from "./pages/Atlas/Atlas";
import Society from "./pages/Society/Society";
import "./index.css";

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  /* On cache le footer global sur les pages immersives qui gèrent leur propre scroll-snap */
  const showFooter = location.pathname !== "/" &&
    location.pathname !== "/accueil" &&
    location.pathname !== "/archives" &&
    location.pathname !== "/exploration";

  // --- Scroll to top or to anchor on route change (Support pour Snap Containers) ---
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    }

    // Remonte page (Gère window et les conteneurs snap spécifiques)
    window.scrollTo(0, 0);
    const snapContainer = document.querySelector('.explore-page-snap-container, .home-wrapper');
    if (snapContainer) {
      snapContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {showNavbar && <Navbar />}

      {/* Wrapper pour les transitions douces */}
      <main key={location.pathname} className="page-fade-in">
        <Routes location={location}>
          <Route path="/" element={<Globe />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/exploration" element={<Exploration />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/glossaire" element={<Glossary />} />
          <Route path="/archives" element={<ArchiveHub />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/chronicles" element={<Chronicles />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/society" element={<Society />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}