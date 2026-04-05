import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoadingScreen.css";
import imageHome2 from "../../assets/home/2.avif";
import imageHome3 from "../../assets/home/3.png";
import imageHome4 from "../../assets/home/4.avif";

// Galerie
import gal1 from "../../assets/archives/galerie/1.jpg";
import gal2 from "../../assets/archives/galerie/2.jpg";
import gal3 from "../../assets/archives/galerie/3.jpg";
import gal4 from "../../assets/archives/galerie/4.jpg";
import gal5 from "../../assets/archives/galerie/5.jpg";
import gal6 from "../../assets/archives/galerie/6.jpg";
import gal7 from "../../assets/archives/galerie/7.jpg";
import gal8 from "../../assets/archives/galerie/8.jpg";
import gal9 from "../../assets/archives/galerie/9.jpg";
import gal10 from "../../assets/archives/galerie/10.jpg";

// Sources
import book1 from "../../assets/archives/books/1.avif";
import book2 from "../../assets/archives/books/2.avif";
import book3 from "../../assets/archives/books/3.avif";
import book4 from "../../assets/archives/books/4.avif";
import book5 from "../../assets/archives/books/5.avif";
import book6 from "../../assets/archives/books/6.avif";
import book7 from "../../assets/archives/books/7.avif";
import book8 from "../../assets/archives/books/8.avif";

export default function LoadingScreen() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Liste des pages lourdes identifiées par l'utilisateur
  const HEAVY_PAGES = ["/", "/home", "/exploration", "/chronicles", "/atlas", "/society", "/galerie", "/sources", "/glossaire"];

  // Registre des images critiques par route pour garantir un affichage instantané
  const ASSETS_BY_ROUTE = {
    "/": [
      "https://unpkg.com/three-globe/example/img/earth-dark.jpg",
      "https://unpkg.com/three-globe/example/img/night-sky.png"
    ],
    "/home": [imageHome2, imageHome3, imageHome4],
    "/galerie": [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10],
    "/sources": [book1, book2, book3, book4, book5, book6, book7, book8]
  };

  useEffect(() => {
    const isHeavy = HEAVY_PAGES.includes(location.pathname);
    if (!isHeavy && !isFirstLoad) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setIsFading(false);

    // 1. On précharge les images de la route actuelle
    const currentAssets = ASSETS_BY_ROUTE[location.pathname] || [];
    const preloadPromises = currentAssets.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // On ne bloque pas indéfiniment si une image échoue
      });
    });

    // 2. On attend la durée minimale ET que les images soient prêtes
    const minTime = isFirstLoad ? 2500 : 1500;
    const timerPromise = new Promise(resolve => setTimeout(resolve, minTime));

    Promise.all([...preloadPromises, timerPromise]).then(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsFirstLoad(false);
      }, 500);
    });

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
