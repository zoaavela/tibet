/* LoadingScreen.jsx */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoadingScreen.css";

/**
 * Écran de chargement minimaliste pour les sections "Héritage" et "Chroniques".
 * Il utilise l'Endless Knot (Shrivatsa) avec un remplissage progressif sur 1s.
 */
export default function LoadingScreen() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Liste des pages lourdes identifiées par l'utilisateur
  const HEAVY_PAGES = ["/", "/home", "/exploration", "/chronicles", "/atlas", "/society", "/galerie", "/sources", "/glossaire"];

  useEffect(() => {
    // Si la page est identifiée comme lourde, on déclenche le loader de 1s
    if (HEAVY_PAGES.includes(location.pathname)) {
      setIsVisible(true);
      setIsFading(false);

      // On cache le loader après 1.5s (durée demandée)
      const timer = setTimeout(() => {
        setIsFading(true);
        // On laisse le temps au fondu CSS de finir
        const vanish = setTimeout(() => setIsVisible(false), 500);
        return () => clearTimeout(vanish);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      // Pour les autres pages, on ne l'affiche pas (ou on le reset silencieusement)
      setIsVisible(false);
    }
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen-full ${isFading ? "fade-out" : ""}`}>
      <div className="knot-wrapper">
        <div className="knot-glow"></div>
        {/* Version fond (base) - On affiche le contour en or sombre */}
        <svg viewBox="-160 -228 631 766" className="knot-svg knot-base" style={{ color: '#A68966' }}>
           <path d="m358 156 79-79L314-47l-79 79-35-35 79-79-124-123L32-82l79 79-35 35-79-79-124 124 79 79-79 79L-3 359l79-79 35 34-79 79 123 124 124-124-79-79 35-34 79 79 123-124-79-79zM314 42l34 35-34 34-35-34 35-35zm-45 114-35 34-34-34 34-35 35 35zM121-82l34-34 35 34-35 35-34-35zm34 124 35 35-35 34-34-34 34-35zm-44 114-35 34-35-34 35-35 35 35zM-38 77l35-35 35 35-35 34-35-34zm35 193-35-35 35-35 35 35-35 35zm193 124-35 34-34-34 34-35 35 34zm-35-124-34-35 34-35 35 35-35 35zm159 0-35-35 35-35 34 35-34 35z" fill="none" stroke="currentColor" strokeWidth="0.5" />
           <path d="m200-2 34 34 79-79L437 77l-79 79 79 79-124 123-78-79-35 35 79 79-124 124L32 393l79-79-35-35-79 79-124-123 79-79-79-79L-3-47l79 79 35-35-79-79 123-123L279-82 200-3zM61-81 205 62l15-15L91-82l64-64 65 64-50 50 15 15 64-65-94-94-94 94zm94-35-34 35 34 34 35-35-35-34zm15 242 15 15L314 12l64 65-50 49 15 15 64-64-94-94-143 143zM-97 77 47 220l14-15L-67 77l64-65 50 50 14-15-64-64-94 94zm223-65L12 126l15 15L140 27l-14-15zm153 65 35 34 34-34-34-35-35 35zm-317 0 35 34 35-34-35-35-35 35zm159 0 34 34 35-34-35-35-34 35zm-30 29 114 114 14-15L107 92l-15 14zm158 0 129 129-64 64-50-49-15 15 64 64 95-94L264 92l-15 14zM42 156l34 34 35-34-35-35-35 35zm193-35-35 35 35 34 34-34-34-35zM-97 235l94 94 143-143-14-15L-3 299l-64-64 49-49-15-15-64 64zm267 50 15 14 114-113-15-15-114 113zm-208-50 35 35 35-35-35-35-35 35zm159 0 34 35 35-35-35-35-34 35zm193 35 34-35-34-35-35 35 35 35zm-223-5 129 128-65 65-64-65 50-49-15-15-65 64 94 94 94-94-143-143-15 15zm64 163 35-35-35-34-34 34 34 35z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* Version remplissage (fill) - En or plein */}
        <svg viewBox="-160 -228 631 766" className="knot-svg knot-fill" style={{ color: '#A68966' }}>
           <path d="m358 156 79-79L314-47l-79 79-35-35 79-79-124-123L32-82l79 79-35 35-79-79-124 124 79 79-79 79L-3 359l79-79 35 34-79 79 123 124 124-124-79-79 35-34 79 79 123-124-79-79zM314 42l34 35-34 34-35-34 35-35zm-45 114-35 34-34-34 34-35 35 35zM121-82l34-34 35 34-35 35-34-35zm34 124 35 35-35 34-34-34 34-35zm-44 114-35 34-35-34 35-35 35 35zM-38 77l35-35 35 35-35 34-35-34zm35 193-35-35 35-35 35 35-35 35zm193 124-35 34-34-34 34-35 35 34zm-35-124-34-35 34-35 35 35-35 35zm159 0-35-35 35-35 34 35-34 35z" fill="currentColor" />
           <path d="m200-2 34 34 79-79L437 77l-79 79 79 79-124 123-78-79-35 35 79 79-124 124L32 393l79-79-35-35-79 79-124-123 79-79-79-79L-3-47l79 79 35-35-79-79 123-123L279-82 200-3zM61-81 205 62l15-15L91-82l64-64 65 64-50 50 15 15 64-65-94-94-94 94zm94-35-34 35 34 34 35-35-35-34zm15 242 15 15L314 12l64 65-50 49 15 15 64-64-94-94-143 143zM-97 77 47 220l14-15L-67 77l64-65 50 50 14-15-64-64-94 94zm223-65L12 126l15 15L140 27l-14-15zm153 65 35 34 34-34-34-35-35 35zm-317 0 35 34 35-34-35-35-35 35zm159 0 34 34 35-34-35-35-34 35zm-30 29 114 114 14-15L107 92l-15 14zm158 0 129 129-64 64-50-49-15 15 64 64 95-94L264 92l-15 14zM42 156l34 34 35-34-35-35-35 35zm193-35-35 35 35 34 34-34-34-35zM-97 235l94 94 143-143-14-15L-3 299l-64-64 49-49-15-15-64 64zm267 50 15 14 114-113-15-15-114 113zm-208-50 35 35 35-35-35-35-35 35zm159 0 34 35 35-35-35-35-34 35zm193 35 34-35-34-35-35 35 35 35zm-223-5 129 128-65 65-64-65 50-49-15-15-65 64 94 94 94-94-143-143-15 15zm64 163 35-35-35-34-34 34 34 35z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
