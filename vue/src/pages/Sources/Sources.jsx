// Sources.jsx
import { useRef, useEffect, useState, useCallback } from "react";
import "./Sources.css";

const BOOKS = [
    {
        author: "Robert Beer",
        title: "The Encyclopedia of Tibetan Symbols and Motifs",
        details: "Boston : Shambhala Publications, 1999.",
        cover: "src/assets/archives/books/1.avif"
    },
    {
        author: "Robert Beer",
        title: "The Handbook of Tibetan Buddhist Symbols",
        details: "Londres : Serindia Publications, 2003.",
        cover: "src/assets/archives/books/2.avif"
    },
    {
        author: "A.-M. Blondeau & K. Buffetrille",
        title: "Le Tibet est-il chinois ?",
        details: "Paris : Albin Michel, 2002.",
        cover: "src/assets/archives/books/3.avif"
    },
    {
        author: "Philippe Cornu",
        title: "Dictionnaire encyclopédique du bouddhisme",
        details: "Paris : Le Seuil, 2006 (1ère éd. 2001).",
        cover: "src/assets/archives/books/4.avif"
    },
    {
        author: "Arnaud Desjardins",
        title: "Le Message des Tibétains : Le vrai visage du tantrisme",
        details: "Paris : La Table Ronde, 1981.",
        cover: "src/assets/archives/books/5.avif"
    },
    {
        author: "Robert N. Linrothe",
        title: "Ruthless Compassion: Wrathful Deities",
        details: "Londres : Serindia Publications, 1999.",
        cover: "src/assets/archives/books/6.avif"
    },
    {
        author: "Rob Preece",
        title: "The Psychology of Buddhist Tantra",
        details: "Ithaca : Snow Lion Publications, 2006.",
        cover: "src/assets/archives/books/7.avif"
    },
    {
        author: "Rolf Alfred Stein",
        title: "La Civilisation tibétaine",
        details: "Paris : L'Asiathèque, 2011 (1ère éd. 1962).",
        cover: "src/assets/archives/books/8.avif"
    }
];

const SITES = [
    {
        title: "Bouddhisme tibétain",
        source: "Encyclopædia Universalis",
        url: "https://www.universalis.fr/encyclopedie/bouddhisme-les-grandes-traditions-bouddhisme-tibetain/",
        date: "11 mars 2026"
    },
    {
        title: "Le Message des Tibétains (Desjardins, 1966)",
        source: "INA – Institut national de l'audiovisuel",
        url: "https://www.ina.fr/ina-eclaire-actu/video/cpf86625778/le-bouddhisme",
        date: "12 mars 2026"
    },
    {
        title: "Collections Himalaya",
        source: "Musée Guimet (MNAAG)",
        url: "https://www.guimet.fr/en/collections/himalayan-world",
        date: "14 mars 2026"
    },
    {
        title: "Empire du Yarlung",
        source: "Wikipédia",
        url: "https://fr.wikipedia.org/wiki/Empire_du_Yarlung",
        date: "13 mars 2026"
    },
    {
        title: "Phurba",
        source: "Wikipédia",
        url: "https://fr.wikipedia.org/wiki/Phurba",
        date: "12 mars 2026"
    },
    {
        title: "Danse Cham",
        source: "Wikipédia",
        url: "https://fr.wikipedia.org/wiki/Cham_(danse)",
        date: "12 mars 2026"
    }
];

export default function Sources() {
    const carouselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Fonction de défilement (manuel ou automatique)
    const scroll = useCallback((direction) => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardElement = carouselRef.current.querySelector('.book-card');

        if (cardElement) {
            const gap = window.innerWidth * 0.025; // Correspond à 2.5vw
            const scrollStep = cardElement.offsetWidth + gap;

            if (direction === 'right') {
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
                }
            } else if (direction === 'left') {
                if (scrollLeft <= 0) {
                    carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
                }
            }
        }
    }, []);

    // Défilement automatique plus doux
    useEffect(() => {
        if (isHovered || isDragging || !carouselRef.current) return;

        const interval = setInterval(() => {
            scroll('right');
        }, 4000); // Temps un peu plus long pour laisser lire

        return () => clearInterval(interval);
    }, [isHovered, isDragging, scroll]);

    // Gestion du clic manuel sur les flèches
    const handleManualScroll = (direction) => {
        setIsHovered(true); // Coupe l'auto-scroll temporairement
        scroll(direction);
    };

    return (
        <div className="sources-page-container">
            <div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">00</span>
                    <span className="label-category">EXPOSITION</span>
                </div>
                <h1 className="label-title">Bibliographie</h1>
                <div className="label-divider"></div>
            </div>

            <section className="sources-section books-section">
                <div className="section-header">
                    <h2>01. Ouvrages</h2>
                    <span className="scroll-indicator">Explorer la collection</span>
                </div>

                <div className="carousel-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                >
                    <button
                        className="carousel-arrow arrow-left"
                        onClick={() => handleManualScroll('left')}
                        aria-label="Livre précédent"
                    >
                        ←
                    </button>

                    <div className="books-carousel" ref={carouselRef}>
                        {BOOKS.map((book, index) => (
                            <div className="book-card" key={index}>
                                <div className="book-cover">
                                    <img src={book.cover} alt={`Couverture du livre ${book.title}`} loading="lazy" />
                                </div>
                                <div className="book-info">
                                    <span className="book-author">{book.author}</span>
                                    <h3 className="book-title">{book.title}</h3>
                                    <p className="book-details">{book.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-arrow arrow-right"
                        onClick={() => handleManualScroll('right')}
                        aria-label="Livre suivant"
                    >
                        →
                    </button>
                </div>
            </section>

            <div className="sources-grid">
                <section className="sources-section film-section">
                    <h2>02. Filmographie</h2>
                    <a href="https://www.arte.tv/fr/videos/111739-000-A/le-tibet-face-a-la-chine-le-dernier-souffle/" target="_blank" rel="noopener noreferrer" className="film-card-link">
                        <div className="film-card">
                            <div className="film-thumb">
                                <img src="https://api-cdn.arte.tv/img/v2/image/NLoPjL5ig5AQcwHMe3WeJH/1920x1080?type=TEXT&watermark=true" alt="Miniature du documentaire" />
                                <div className="film-overlay">
                                    <span className="play-icon">▶</span>
                                    <span>Visionner le documentaire</span>
                                </div>
                            </div>
                            <div className="film-content">
                                <span className="film-tag">Documentaire • 90 min</span>
                                <h3 className="film-title">Le Tibet face à la Chine, le dernier souffle ?</h3>
                                <p className="film-directors">Réalisé par François Reinhardt et Aurine Crémieu</p>
                                <p className="film-details">ARTE / SVT / Radio Canada, 2024.</p>
                            </div>
                        </div>
                    </a>
                </section>

                <section className="sources-section web-section">
                    <h2>03. Sitographie</h2>
                    <ul className="web-list">
                        {SITES.map((site, index) => (
                            <li key={index}>
                                <a href={site.url} target="_blank" rel="noopener noreferrer" className="web-link">
                                    <div className="web-link-content">
                                        <span className="web-source">{site.source}</span>
                                        <span className="web-title">« {site.title} »</span>
                                    </div>
                                    <div className="web-link-meta">
                                        <span className="web-date">Consulté le {site.date}</span>
                                        <span className="web-arrow">↗</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}