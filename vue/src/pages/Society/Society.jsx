import React from 'react';
import './Society.css';
import image1 from '../../assets/culture/society/animals/1.png';
import image2 from '../../assets/culture/society/animals/2.png';
import image3 from '../../assets/culture/society/animals/3.jpg';
import image4 from '../../assets/culture/society/animals/4.jpg';
import image5 from '../../assets/culture/society/drogpa/1.avif';
import image6 from '../../assets/culture/society/gastronomie/1.jpg';
import image7 from '../../assets/culture/society/gastronomie/2.jpg';
import image8 from '../../assets/culture/society/climat/1.jpg';
import image9 from '../../assets/culture/society/1.png';

const faunaAnimals = [
    {
        id: 1,
        commonName: 'Panthère des Neiges',
        scientificName: 'Panthera Uncia',
        image: image1,
        description: 'Ses larges cavités nasales réchauffent l\'air glacial avant qu\'il n\'atteigne ses poumons. Sa queue d\'un mètre lui sert de balancier sur les falaises et de couverture thermique isolante.',
    },
    {
        id: 2,
        commonName: 'Antilope Tibétaine',
        scientificName: 'Pantholops Hodgsonii',
        image: image2,
        description: 'Capable de courir à 80 km/h à plus de 5 000 mètres. Elle possède un sous-poil extrêmement dense (shahtoosh) pour survivre au gel, ce qui en fait une espèce vulnérable au braconnage.',
    },
    {
        id: 3,
        commonName: 'Grue à cou noir',
        scientificName: 'Grus Nigricollis',
        image: image3,
        description: 'La seule espèce de grue évoluant et se reproduisant en très haute altitude. Ses migrations saisonnières sont un indicateur biologique majeur pour les populations agro-pastorales.',
    },
    {
        id: 4,
        commonName: 'Yak',
        scientificName: 'Bos Mutus',
        image: image4,
        description: 'Emblème du plateau tibétain, le yak sauvage peut peser jusqu\'à 1 200 kg. Ses poumons surdéveloppés et son sang riche en hémoglobine lui permettent de survivre à des altitudes dépassant 5 000 mètres.',
    }
];

const Society = () => {
    return (
        <main className="editorial-container page-fade-in">
            {/* --- HERO NARRATIF --- */}
            <header className="editorial-hero">
                <div className="soc-hero-content">
                    <h1 className="soc-hero-title">Terres<br />Vivantes</h1>
                    <p className="soc-hero-subtitle">
                        De la steppe nomade aux confins glaciaires : survie, adaptation et gastronomie sur le Toit du Monde.
                    </p>
                </div>
                <div className="soc-hero-image-container">
                    <img
                        src={image9}
                        alt="Terres Vivantes"
                        className="soc-hero-bg-image"
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>
                <div className="soc-hero-scroll-indicator">
                    <span>Dérouler le fil</span>
                    <div className="scroll-line"></div>
                </div>
            </header>

            {/* ================= SECTION 1 : DROGPA ================= */}
            <section className="editorial-section">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre I</span>
                    <h2>Drogpa</h2>
                    <p>Le Peuple des Pâturages</p>
                </div>

                <div className="editorial-feature">
                    <figure className="feature-hero-img">
                        <img
                            src={image5}
                            alt="Campement nomade"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>

                    <div className="feature-text-content">
                        <h3>Qui sont les Drogpa ?</h3>
                        <p className="lead-paragraph">
                            Les Drogpa (littéralement "peuple de la steppe" ou "peuple des pâturages") sont les éleveurs nomades du haut plateau tibétain. Loin de l'imagerie folklorique ou des confusions modernes, ils incarnent une civilisation pastorale millénaire, survivant dans l'un des environnements les plus hostiles de la planète.
                        </p>

                        <div className="text-columns">
                            <div className="column">
                                <span className="col-tag">Mode de vie</span>
                                <h4>La Transhumance</h4>
                                <p>Leur existence n'est pas une errance hasardeuse. La steppe est scrupuleusement quadrillée selon un calendrier strict : les hauts pâturages d'Estive (Yarsa) balayés par les vents en été, et les vallées-Refuge (Gunsa) pour survivre aux hivers où les températures chutent à -40°C.</p>
                            </div>
                            <div className="column">
                                <span className="col-tag">Symbiose</span>
                                <h4>Le Pilier Yak</h4>
                                <p>Le yak (et la femelle, la drī) est la clé de voûte de cette société. Il fournit tout : le lait lourd en lipides, la viande pour l'hiver, la laine tissée pour les tentes imperméables (Pugna), et même la bouse séchée, unique combustible disponible au-delà de la ligne des arbres.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2 : GASTRONOMIE ================= */}
            <section className="editorial-section dark-mode">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre II</span>
                    <h2>Gastronomie</h2>
                    <p>Énergie & Altitude</p>
                </div>

                <div className="magazine-layout">
                    <div className="magazine-intro">
                        <p className="drop-cap">L</p>
                        <p className="intro-text">'alimentation tibétaine est le résultat d'une adaptation pragmatique à un environnement d'altitude extrême, reposant sur un équilibre complexe entre les rares vallées agricoles et le pastoralisme désertique.</p>
                    </div>

                    <div className="ingredient-grid">
                        <div className="ingredient-card">
                            <span className="ing-number">01</span>
                            <h4>Tsampa</h4>
                            <p>Orge grillée puis moulue. Base absolue du régime, prête à consommer avec du thé.</p>
                        </div>
                        <div className="ingredient-card">
                            <span className="ing-number">02</span>
                            <h4>Chura & Sho</h4>
                            <p>Yaourt fermenté dense (Sho) et fromage extra-dur séché à l'air libre (Chura).</p>
                        </div>
                        <div className="ingredient-card">
                            <span className="ing-number">03</span>
                            <h4>Sha Kampo</h4>
                            <p>Viande séchée crue sous l'air glacial. Le végétarisme est impossible hors des vallées.</p>
                        </div>
                    </div>

                    <div className="editorial-split-block">
                        <figure className="split-image">
                            <img
                                src={image6}
                                alt="Momos vapeurs"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                        <div className="split-content">
                            <h3>Momos & Rituels</h3>
                            <p>Ces raviolis vapeur sont probablement le plat tibétain le plus célébré. Leur préparation lente et collective est réservée aux rassemblements familiaux ou lors du festival du Losar. Traditionnellement farcis de viande hachée très grasse.</p>
                        </div>
                    </div>

                    <div className="editorial-split-block reverse">
                        <figure className="split-image">
                            <img
                                src={image7}
                                alt="Préparation du Po Cha"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                        <div className="split-content">
                            <h3>Po Cha (Thé au Beurre)</h3>
                            <p>Boisson centrale de la survie : thé noir compressé, vigoureusement baratté avec du vieux beurre de yak et du sel minéral. Ce liquide brûlant hydrate, stimule, et apporte la lourde couche lipidique essentielle. Jusqu'à 40 tasses par jour.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 3 : 3ÈME PÔLE ================= */}
            <section className="editorial-section">
                <div className="section-header-centered">
                    <span className="chapter-meta">Chapitre III</span>
                    <h2>Le 3ème Pôle</h2>
                    <p>Climat & Résilience</p>
                </div>

                <div className="dossier-intro">
                    <img
                        src={image8}
                        alt="Glaciers himalayens"
                        className="dossier-hero-img"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="dossier-intro-text">
                        <h3>Le Château d'Eau de l'Asie</h3>
                        <p>Né de la collision titanesque entre la plaque indienne et eurasienne il y a 50 millions d'années. Le plateau contient la plus grande réserve de glace hors des pôles géographiques. Près de 2 milliards d'humains dépendent de ses eaux.</p>
                    </div>
                </div>

                <div className="data-dashboard">
                    <div className="data-metric">
                        <span className="metric-val">2.5M</span>
                        <span className="metric-label">km² de superficie</span>
                    </div>
                    <div className="data-metric">
                        <span className="metric-val">-40%</span>
                        <span className="metric-label">d'Oxygène (O₂)</span>
                    </div>
                    <div className="data-metric">
                        <span className="metric-val">46k</span>
                        <span className="metric-label">Glaciers répertoriés</span>
                    </div>
                </div>

                <section className="fauna-carousel-section">
                    <h3 className="fauna-section-title">Faune d'Altitude</h3>
                    <div className="carousel-container">
                        <div className="carousel-track">
                            {faunaAnimals.map((animal) => (
                                <div className="carousel-card" key={animal.id}>
                                    <figure className="card-image-holder">
                                        <img src={animal.image} alt={animal.commonName} loading="lazy" decoding="async" />
                                    </figure>
                                    <div className="card-text-content">
                                        <span className="scientific-meta">{animal.scientificName}</span>
                                        <h4>{animal.commonName}</h4>
                                        <div className="card-separator"></div>
                                        <p>{animal.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="editorial-alert-box">
                    <h3>L'Effondrement Silencieux</h3>
                    <p>Le Troisième Pôle se réchauffe deux fois plus vite que le reste de la planète. Le permafrost fond, relâchant du carbone millénaire. La disparition de ses glaciers est une bombe à retardement pour l'hydrologie de l'Asie entière.</p>
                </div>
            </section>
        </main>
    );
};

export default Society;