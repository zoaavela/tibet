import React from 'react';
import './Atlas.css';

import hero from '../../assets/culture/atlas/1.avif';
import image1 from '../../assets/culture/atlas/sowa-rigpa/1.avif';
import image4 from '../../assets/culture/atlas/artisanat/1.avif';
import image5 from '../../assets/culture/atlas/artisanat/2.avif';
import image6 from '../../assets/culture/atlas/langage/1.webp';
import image7 from '../../assets/culture/atlas/langage/2.avif';
import image8 from '../../assets/culture/atlas/langage/3.jpg';
import image9 from '../../assets/culture/atlas/langage/4.jpg';
import image10 from '../../assets/culture/atlas/langage/5.jpg';
import image11 from '../../assets/culture/atlas/langage/6.webp';


const colorCodes = [
    {
        id: 1,
        commonName: 'Bleu',
        scientificName: 'ESPACE',
        image: image8,
        description: 'La première toile du fil. Englobante, elle représente l\'atmosphère supérieure éternelle.',
        credit: 'Archives Musée / Lhasa'
    },
    {
        id: 2,
        commonName: 'Blanc',
        scientificName: 'AIR',
        image: image10,
        description: 'Mouvement des nuages, vecteur principal des prières emportées mécaniquement.',
        credit: 'Coll. Particulière'
    },
    {
        id: 3,
        commonName: 'Rouge',
        scientificName: 'FEU',
        image: image9,
        description: 'Température thermique et éveil intellectuel, central à la chaîne des Lungta.',
        credit: 'Fonds Gonpo'
    },
    {
        id: 4,
        commonName: 'Jaune',
        scientificName: 'TERRE',
        image: image7,
        description: 'Ancrage jaune. La géologie solide finale protégeant la sédimentation du rite d\'altitude.',
        credit: 'Tibet Museum / 1954'
    },
    {
        id: 5,
        commonName: 'Vert',
        scientificName: 'EAU',
        image: image11,
        description: 'Vitalité fluide. Elle incarne le mouvement des rivières sacrées et la régénération du vivant.',
        credit: 'Fonds National'
    }
];

const Atlas = () => {
    return (
        <main className="editorial-container page-fade-in">
            {/* --- HERO NARRATIF --- */}
            <header className="editorial-hero">
                <div className="soc-hero-content">
                    <h1 className="soc-hero-title">Savoirs<br />du Plateau</h1>
                    <p className="soc-hero-subtitle">
                        Une immersion documentaire à travers l'ingénierie médicale, la maîtrise des alliages et l'algorithme des signes du Tibet antique.
                    </p>
                </div>
                <div className="soc-hero-image-container">
                    <img
                        src={hero}
                        alt="Savoirs du Plateau"
                        className="soc-hero-bg-image"
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </header>

            {/* ================= SECTION 1 : SOWA RIGPA ================= */}
            <section className="editorial-section">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre I</span>
                    <h2>Sowa Rigpa</h2>
                    <p>Science & Médecine</p>
                </div>

                <div className="editorial-feature">
                    <figure className="feature-hero-img">
                        <img
                            src={image1}
                            alt="Ancien manuscrit"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption className="img-credit"><span>Source</span> Archives Sowa Rigpa / Lhasa</figcaption>
                    </figure>

                    <div className="feature-text-content">
                        <h3>L'Analyse du Gyushi</h3>
                        <p className="lead-paragraph">
                            Articulée au 8ème siècle via le Gyushi, la base chirurgicale et végétale tibétaine est interdépendante. Ici la pathologie est simplement l'effet d'une dissonance : un accord rompu entre le minéral, le mental et la météo.
                        </p>

                        <div className="text-columns">
                            <div className="column">
                                <span className="col-tag">Anatomie Subtile</span>
                                <h4>Les Humeurs</h4>
                                <p>La médecine tibétaine repose sur l'équilibre des trois humeurs : Lung (Vent/Mouvement), Tripa (Bile/Chaleur) et Beken (Phlegme/Stabilité). Leur déséquilibre est la cause première de toute souffrance organique.</p>
                            </div>
                            <div className="column">
                                <span className="col-tag">Diagnostic</span>
                                <h4>La Pulsologie</h4>
                                <p>L'Amchi interprète le réseau comme un sismographe. Via trois doigts appuyés à l'avant-bras, il discrimine virtuellement douze pouls distaux liés aux organes internes et à leur énergie thermique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2 : ARTISANAT ================= */}
            <section className="editorial-section dark-mode">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre II</span>
                    <h2>Feu et Fil</h2>
                    <p>Matière & Artisanat</p>
                </div>

                <div className="magazine-layout">
                    <div className="magazine-intro">
                        <p className="drop-cap">L</p>
                        <p className="intro-text">'artisanat tibétain n'a jamais été la simple production d'objets utilitaires. La transformation de la matière brute revêt une dimension alchimique, répondant à des codifications précises dictées par des traités mathématiques anciens.</p>
                    </div>

                    <div className="ingredient-grid">
                        <div className="ingredient-card">
                            <span className="ing-number">01</span>
                            <h4>Cire Perdue</h4>
                            <p>Le modèle en cire fond sous l'argile brûlante, laissant place au bronze. Le moule détruit rend chaque statuaire unique.</p>
                        </div>
                        <div className="ingredient-card">
                            <span className="ing-number">02</span>
                            <h4>Trokzo</h4>
                            <p>Technique du repoussé : feuilles de cuivre gravées à l'envers au poinçon pour orner toits et amulettes.</p>
                        </div>
                        <div className="ingredient-card">
                            <span className="ing-number">03</span>
                            <h4>Namchak</h4>
                            <p>Le "fer céleste" (météoritique), requis pour la forge de puissantes dagues rituelles comme le Phurba.</p>
                        </div>
                    </div>

                    <div className="editorial-split-block">
                        <figure className="split-image">
                            <img
                                src={image4}
                                alt="Artisan tibétain"
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption className="img-credit"><span>Credit</span> Fonds Gonpo / 1924</figcaption>
                        </figure>
                        <div className="split-content">
                            <h3>Maîtrise & Tradition</h3>
                            <p>La création répond à une autarcie technique. L'artisan est souvent un initié capable de manipuler les métaux nobles et les alliages complexes avec une précision mathématique et spirituelle.</p>
                        </div>
                    </div>

                    <div className="editorial-split-block reverse">
                        <figure className="split-image">
                            <img
                                src={image5}
                                alt="Bijoux traditionnels"
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption className="img-credit"><span>Source</span> Collection Musée de l'Homme</figcaption>
                        </figure>
                        <div className="split-content">
                            <h3>L'Économie Lapidaire</h3>
                            <p>Les pierres recèlent de la valeur marchande et sociale. Le corail rouge et les agates Dzi composent un patrimoine mobile, essentiel à l'économie des familles nomades du haut plateau.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 3 : LANGAGE ================= */}
            <section className="editorial-section">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre III</span>
                    <h2>Signes & Tracés</h2>
                    <p>Sémiologie & Code</p>
                </div>

                <div className="dossier-intro">
                    <figure className="dossier-hero-figure">
                        <img
                            src={image6}
                            alt="Calligraphie tibétaine"
                            className="dossier-hero-img"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption className="img-credit"><span>Source</span> Manuscrit de l'Université de Namgyal</figcaption>
                    </figure>
                    <div className="dossier-intro-text">
                        <h3>Une Langue Manufacturée</h3>
                        <p>L'alphabet syllabique fut techniquement compilé au VIIe siècle par ordonnance royale. Naviguant entre la rigueur angulaire des textes Uchen et la fluidité de la main Ume.</p>
                    </div>
                </div>

                <div className="data-dashboard">
                    <div className="data-metric">
                        <span className="metric-val">30</span>
                        <span className="metric-label">Consonnes de base</span>
                    </div>
                    <div className="data-metric">
                        <span className="metric-val">Uchen</span>
                        <span className="metric-label">Style scripturaire</span>
                    </div>
                    <div className="data-metric">
                        <span className="metric-val">VIIe</span>
                        <span className="metric-label">Siècle de création</span>
                    </div>
                </div>

                <section className="fauna-carousel-section">
                    <h3 className="fauna-section-title">Code Chromatique</h3>
                    <div className="carousel-container">
                        <div className="carousel-track">
                            {colorCodes.map((color) => (
                                <div className="carousel-card" key={color.id}>
                                    <figure className="card-image-holder">
                                        <img src={color.image} alt={color.commonName} loading="lazy" decoding="async" />
                                        <div className="museum-caption-tag">{color.scientificName}</div>
                                        <figcaption className="img-credit"><span>Credit</span> {color.credit}</figcaption>
                                    </figure>
                                    <div className="card-text-content">
                                        <h4>{color.commonName}</h4>
                                        <div className="card-separator"></div>
                                        <p>{color.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="editorial-alert-box">
                    <h3>L'Algorithme Thangka</h3>
                    <p>Dessiner un Thangka est une ingénierie dogmatique absolue pilotée par l'iconométrie. La grille pré-construite fixe mathématiquement le moindre pli oculaire. Une seule proportion disloquée invalide l'œuvre.</p>
                </div>
            </section>
        </main>
    );
};

export default Atlas;