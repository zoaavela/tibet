import React from 'react';
import './Atlas.css';

import hero from '../../assets/culture/atlas/1.png';
import image1 from '../../assets/culture/atlas/sowa-rigpa/1.avif';
import image2 from '../../assets/culture/atlas/sowa-rigpa/2.avif';
import image3 from '../../assets/culture/atlas/sowa-rigpa/3.avif';
import image4 from '../../assets/culture/atlas/artisanat/1.avif';
import image5 from '../../assets/culture/atlas/artisanat/2.avif';
import image6 from '../../assets/culture/atlas/langage/1.webp';
import image7 from '../../assets/culture/atlas/langage/2.webp';

const Atlas = () => {
    return (
        <main className="atlas-container page-fade-in">
            {/* --- HERO : Titre de l'exposition --- */}
            <header className="atlas-hero">
                <div className="atl-hero-content">
                    <h1 className="atlas-main-title">Savoirs<br />du Plateau</h1>
                    <p className="atlas-intro">
                        Une immersion documentaire à travers l'ingénierie médicale, la maîtrise des alliages et l'algorithme des signes du Tibet antique.
                    </p>
                </div>
                <div className="atl-hero-image-container">
                    <img
                        src={hero}
                        alt="Savoirs du Plateau"
                        className="atl-hero-bg-image"
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </header>

            {/* ================= SECTION 1 : SOWA RIGPA ================= */}
            <section className="atlas-section">
                <div className="atlas-sticky-sidebar">
                    <span className="section-number">01</span>
                    <h2>Sowa Rigpa</h2>
                    <p className="section-theme">Science & Médecine</p>
                </div>

                <div className="atlas-content-flow">
                    <div className="atlas-narrative-block">
                        <img
                            src={image1}
                            alt="Ancien manuscrit"
                            className="block-image"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="block-text overlap-left">
                            <p>Articulée au 8ème siècle via le Gyushi, la base chirurgicale et végétale tibétaine est interdépendante.</p>
                            <p>Ici la pathologie est simplement l'effet d'une dissonance : un accord rompu entre le minéral, le mental et la météo.</p>
                        </div>
                    </div>

                    <div className="atlas-horizontal-gallery">
                        <h3>Les Trois Humeurs</h3>
                        <p className="gallery-desc">L'anatomie subtile : une nomenclature systémique de l'organisme humain.</p>

                        <div className="horizontal-track">
                            <div className="gallery-card">
                                <span className="card-tag">Le Vent</span>
                                <h4>Lung (Air)</h4>
                                <p>La dynamique des fluides et de la respiration nerveuse. Trop instable, il génère les névroses et l'insomnie chronique.</p>
                            </div>
                            <div className="gallery-card">
                                <span className="card-tag">La Bile</span>
                                <h4>Tripa (Feu)</h4>
                                <p>Le cratère digestif et thermique. Une poussée trop agressive incinère l'organisme de fièvres et d'ulcères rageurs.</p>
                            </div>
                            <div className="gallery-card">
                                <span className="card-tag">Le Phlegme</span>
                                <h4>Beken (Terre/Eau)</h4>
                                <p>L'ossature lourde, l'inertie hydratante. Sa stagnation mène aux rhumatismes pesants et à l'amnésie léthargique.</p>
                            </div>
                        </div>
                    </div>

                    <div className="atlas-dual-block">
                        <div className="dual-text">
                            <h3>La Pulsologie Filaire</h3>
                            <p>L'Amchi interprète le réseau comme un sismographe. Via trois doigts appuyés à l'avant-bras, il discrimine virtuellement douze pouls distaux liés aux organes internes.</p>
                            <p>L'analyse matinale complète la catégorisation thermique "chaude" ou "froide" de la dégénérescence du patient.</p>
                        </div>
                        <img
                            src={image2}
                            alt="Prise de pouls traditionnelle"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="atlas-narrative-block reverse">
                        <img src={image3} alt="Plantes de pharmacopée" className="block-image" />
                        <div className="block-text overlap-right">
                            <h3>Flore Résiliente</h3>
                            <p>La thérapeutique repose sur une pharmacopée de cimes. Le Crocus Sativus est infusé pour désamorcer l'ébullition sanguine hépatique.</p>
                            <p>Les remèdes n'engourdissent pas ; ils agissent par résonance biochimique d'altitude, comme le pavot Meconopsis Horridula.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2 : ARTISANAT ================= */}
            <section className="atlas-section section-darker">
                <div className="atlas-sticky-sidebar">
                    <span className="section-number">02</span>
                    <h2>Feu et Fil</h2>
                    <p className="section-theme">Matière & Artisanat</p>
                </div>

                <div className="atlas-content-flow">
                    <div className="atlas-narrative-block">
                        <img
                            src={image4}
                            alt="Artisan tibétain"
                            className="block-image tall"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="block-text overlap-left">
                            <p>L'artisanat tibétain n'a jamais été la simple production d'objets utilitaires. La transformation de la matière brute revêt une dimension alchimique.</p>
                            <p>La création répond à des codifications précises dictées par des traités mathématiques anciens, bien au-delà de la survie rurale.</p>
                        </div>
                    </div>

                    <div className="atlas-horizontal-gallery">
                        <h3>La Maîtrise des Alliages</h3>
                        <p className="gallery-desc">Des techniques séculaires de métallurgie spirituelle et fonctionnelle.</p>

                        <div className="horizontal-track">
                            <div className="gallery-card">
                                <span className="card-tag">Sculpture</span>
                                <h4>Cire Perdue</h4>
                                <p>Le modèle en cire fond sous l'argile brûlante, laissant place au bronze. Le moule détruit rend chaque statuaire unique.</p>
                            </div>
                            <div className="gallery-card">
                                <span className="card-tag">Ornement</span>
                                <h4>Trokzo (Repoussé)</h4>
                                <p>Feuilles de cuivre gravées à l'envers au poinçon, massivement utilisées pour orner toits et amulettes.</p>
                            </div>
                            <div className="gallery-card">
                                <span className="card-tag">Ésotérisme</span>
                                <h4>Namchak</h4>
                                <p>Le fameux "fer céleste" (météoritique) des forgerons, requis pour de puissantes dagues rituelles (Phurba).</p>
                            </div>
                        </div>
                    </div>

                    <div className="atlas-dual-block reverse">
                        <div className="dual-text">
                            <h3>L'Économie Lapidaire</h3>
                            <p>L'incrustation minérale n'est pas qu'un goût pour l'opulence. Les pierres recèlent de la valeur marchande, sociale et apotropaïque.</p>
                            <p>Le corail rouge vif et les précieuses agates zébrées (Dzi) composent un patrimoine mobile, essentiel à l'économie des familles nomades.</p>
                        </div>
                        <img src={image5} alt="Bijoux traditionnels" />
                    </div>

                    <div className="atlas-horizontal-gallery compact">
                        <h3>Fibres Fondamentales</h3>
                        <div className="horizontal-track">
                            <div className="gallery-card">
                                <span className="card-tag">Écorce</span>
                                <h4>Lokta</h4>
                                <p>Papier rugueux de daphné. Sa toxine douce repousse les moisissures des traités millénaires.</p>
                            </div>
                            <div className="gallery-card">
                                <span className="card-tag">Kullu</span>
                                <h4>Poil de Yak</h4>
                                <p>Lourd, filé en tentes imperméables, il contraste avec la laine douce interne utilisée pour les vêtements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 3 : LANGAGE ================= */}
            <section className="atlas-section">
                <div className="atlas-sticky-sidebar">
                    <span className="section-number">03</span>
                    <h2>Signes & Tracés</h2>
                    <p className="section-theme">Sémiologie</p>
                </div>

                <div className="atlas-content-flow">
                    <div className="atlas-narrative-block">
                        <img src={image6} alt="Calligraphie tibétaine" className="block-image" />
                        <div className="block-text overlap-left">
                            <p>Une langue manufacturée. L'alphabet syllabique fut techniquement compilé au VIIe siècle par ordonnance du Roi.</p>
                            <p>Naviguant entre la rigueur angulaire des textes Uchen, ligne maîtresse imprimée, et la fluidité de la main Ume, sans ligne supérieure.</p>
                        </div>
                    </div>

                    <div className="atlas-dual-block">
                        <div className="dual-text">
                            <h3>L'Algorithme Thangka</h3>
                            <p>Dessiner un Thangka ne laisse aucune place à l'intuition artistique émotive. C'est une ingénierie dogmatique absolue pilotée par l'iconométrie.</p>
                            <p>La grille pré-construite fixe mathématiquement le moindre pli oculaire. Une seule proportion disloquée invalide instantanément la toile.</p>
                        </div>
                        <img src={image7} alt="Grille iconométrique" />
                    </div>

                    <div className="atlas-horizontal-gallery">
                        <h3>Code Chromatique</h3>
                        <p className="gallery-desc">La doctrine des drapeaux « Chevaux de Vent ». Les formules sont actionnées par le frottement mécanique du Vent.</p>

                        <div className="horizontal-track">
                            <div className="gallery-card color-card">
                                <span className="card-tag">Bleu</span>
                                <h4>Espace</h4>
                                <p>La première toile du fil. Englobante, elle représente l'atmosphère supérieure éternelle.</p>
                            </div>
                            <div className="gallery-card color-card">
                                <span className="card-tag">Blanc</span>
                                <h4>Air</h4>
                                <p>Mouvement des nuages, vecteur principal des prières emportées mécaniquement.</p>
                            </div>
                            <div className="gallery-card color-card">
                                <span className="card-tag">Rouge</span>
                                <h4>Feu</h4>
                                <p>Température thermique et éveil intellectuel, central à la chaîne des Lungta.</p>
                            </div>
                            <div className="gallery-card color-card">
                                <span className="card-tag">Jaune</span>
                                <h4>Terre</h4>
                                <p>Ancrage jaune. La géologie solide finale protégeant la sédimentation du rite d'altitude.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Atlas;