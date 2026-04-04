import React from 'react';
import './Chronicles.css';

const Chronicles = () => {
    return (
        <main className="chronicle-container page-fade-in">
            {/* --- HERO NARRATIF --- */}
            <header className="chronicle-hero">
                <div className="chr-hero-text-content">
                    <h1 className="chr-hero-title">Le Toit<br />du Monde</h1>
                    <p className="chr-hero-subtitle">Une exploration narrative du Tibet antique : de la fureur martiale du Yarlung à l'ingénierie minérale du Potala.</p>
                </div>
                <div className="chr-hero-image-container">
                    <img 
                        src="src/assets/culture/chronicles/1.jpg" 
                        alt="Le Toit du Monde" 
                        className="chr-hero-bg-image" 
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>
                <div className="chr-hero-scroll-indicator">
                    <span>Dérouler le fil</span>
                    <div className="scroll-line"></div>
                </div>
            </header>

            <div className="chronicle-timeline-wrapper">
                {/* Ligne directrice centrale */}
                <div className="timeline-spine"></div>

                {/* ================= CHAPITRE 1 : EMPIRE ================= */}
                <article className="chronicle-chapter">
                    <div className="chapter-sticky-marker">
                        <span className="chapter-num">01</span>
                        <h2 className="chapter-name">Le Yarlung</h2>
                        <span className="chapter-theme">Histoire & Conquête</span>
                    </div>

                    <div className="chapter-content">
                        <figure className="narrative-figure full-bleed">
                            <img 
                                src="src/assets/culture/chronicles/empire/1.avif" 
                                alt="Forteresse historique" 
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption>
                                <p>Brisez l'illusion contemporaine d'un havre méditatif pacifiste : le Tibet antique fut d'abord l'un des empires les plus martiaux d'Asie du 7ème siècle.</p>
                                <p>Armées redoutables, contrôle du bassin du Tarim et pillage furtif de la capitale sino-Tangs – le Yarlung était total.</p>
                            </figcaption>
                        </figure>

                        <div className="narrative-text-block">
                            <h3>Les Traités Sténographiés</h3>
                            <p>L'ordre public suivait l'expansion frontalière. Les célèbres accords de frontières sino-tibétaines de 822 ont été actés dans la pierre froide du Jokhang.</p>
                            <blockquote>« Les Tibétains seront heureux au Tibet, les Chinois seront heureux en Chine. »</blockquote>
                        </div>

                        <div className="resource-dossier">
                            <div className="dossier-header">
                                <h3>Technologies d'Assaut</h3>
                                <p>La supériorité militaire était ancrée dans la résilience à l'altitude.</p>
                            </div>
                            <div className="dossier-cards">
                                <div className="dossier-card">
                                    <h4>Armure Lamellaire</h4>
                                    <p>Plaques cuirassées et froides : les cavaliers étaient si lourdement recouverts que le mythe disait qu'on n'en voyait que les yeux féroces.</p>
                                    <span className="card-tag">Infanterie</span>
                                </div>
                                <div className="dossier-card">
                                    <h4>Cavalerie Haute</h4>
                                    <p>Une logistique impitoyable de raids éclairs équestres rendue possible par les montures aguerries à l'hypoxie sévère.</p>
                                    <span className="card-tag">Animisme</span>
                                </div>
                                <div className="dossier-card">
                                    <h4>Métallurgie Pure</h4>
                                    <p>Grandes épées droites ultra-denses – The Yarlung Forge. Marque indélébile de statut d'aristocrate-guerrier pré-religieux.</p>
                                    <span className="card-tag">Forge</span>
                                </div>
                            </div>
                        </div>

                        <div className="narrative-split">
                            <img 
                                src="src/assets/culture/chronicles/empire/2.png" 
                                alt="Détails d'armes anciennes" 
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="split-text">
                                <h3>Le Prix du Bouddhisme</h3>
                                <p>La chute fut causée par l'émergence des monastères. Le clergé bouddhiste exigeait l'exonération des impôts martiaux, vidant peu à peu les coffres et la fureur militaire des armées laïques.</p>
                                <p>Le régicide du Tsenpo Langdarma brisa l'empire en parcelles isolées, achevant la transition définitive vers la théocratie pacifique sacrée.</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* ================= CHAPITRE 2 : GESAR ================= */}
                <article className="chronicle-chapter">
                    <div className="chapter-sticky-marker">
                        <span className="chapter-num">02</span>
                        <h2 className="chapter-name">Gesar de Ling</h2>
                        <span className="chapter-theme">Littérature Orale</span>
                    </div>

                    <div className="chapter-content">
                        <figure className="narrative-figure side-image">
                            <img 
                                src="src/assets/culture/chronicles/gesar/1.jpg" 
                                alt="Gesar Thangka" 
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption>
                                <p>Plus profond que l'Iliade, plus gigantesque que l'Odyssée. Avec des dizaines de millions de mots articulés à la volée, c'est un testament héroïque.</p>
                                <p>Une encyclopédie des guerriers, ancrée dans la cosmologie, contant la vie du sauveur nomade descendu écraser les rois-démons.</p>
                            </figcaption>
                        </figure>

                        <div className="narrative-text-block highlight-block">
                            <h3>Les Bardes Analphabètes</h3>
                            <p>Le mystère cognitif des <em>Babdrung</em> : ces passeurs de mythologie sont très souvent dépourvus d'éducation textuelle.</p>
                            <p>Leur récitation titanesque se fait au gré d'une transe. Ils ne mémorisent pas. Ils rapportent lire des "images ou projections" défilant dans leur rétine au rythme de l'histoire.</p>
                            <img 
                                src="src/assets/culture/chronicles/gesar/2.jpg" 
                                alt="Barde en transe" 
                                className="inline-img" 
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="resource-dossier">
                            <div className="dossier-header">
                                <h3>L'Anatomie du Mythe</h3>
                                <p>Une saga fractale construite sur une trinité architecturale.</p>
                            </div>
                            <div className="dossier-cards vertical">
                                <div className="dossier-card">
                                    <span className="card-tag">Tome I</span>
                                    <h4>Origine Terrestre</h4>
                                    <p>Naissance abrupte et hideuse. Un bannissement aux confins du plateau menant à une course de chevaux divine remportant la princesse Drugmo.</p>
                                </div>
                                <div className="dossier-card">
                                    <span className="card-tag">Tome II</span>
                                    <h4>Les Campagnes</h4>
                                    <p>Opérations tactiques massives contre les royaumes hostiles (le Nord, Hor, etc.). Un traité complet de militarisme nomade équestre.</p>
                                </div>
                                <div className="dossier-card">
                                    <span className="card-tag">Tome III</span>
                                    <h4>Dissolution</h4>
                                    <p>Gesar pacifie les landes, ancre la verticalité cosmique (Dharma) puis disparaît, évaporé dans ses propres cieux sans mourir techniquement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* ================= CHAPITRE 3 : ARCHITECTURE ================= */}
                <article className="chronicle-chapter">
                    <div className="chapter-sticky-marker">
                        <span className="chapter-num">03</span>
                        <h2 className="chapter-name">Murs Inclinés</h2>
                        <span className="chapter-theme">Espace & Ingénierie</span>
                    </div>

                    <div className="chapter-content">
                        <figure className="narrative-figure full-bleed overlap-top">
                            <img 
                                src="src/assets/culture/chronicles/architecture/1.avif" 
                                alt="Palais du Potala" 
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption className="dark-caption">
                                <p>L'ingénierie sismique et thermique de l'architecture tibétaine.</p>
                                <p>L'architecture n'est pas guidée par l'esthétique pure, mais par une stricte nécessité de survie géologique face aux séismes et vents extrêmes.</p>
                            </figcaption>
                        </figure>

                        <div className="narrative-text-block">
                            <h3>La Physique de la Forteresse</h3>
                            <p>Bâtir sur le plateau tibétain implique de composer avec des contraintes majeures : une forte activité sismique, des vents violents, une amplitude thermique extrême et la rareté du bois.</p>
                            <p>Le résultat est le <strong>Dzong</strong> (forteresse-monastère) et les habitations en pisé. Leur caractéristique la plus frappante est la géométrie trapézoïdale : des murs massifs à la base qui s'affinent vers le sommet.</p>
                            <img 
                                src="src/assets/culture/chronicles/architecture/2.avif" 
                                alt="Murs inclinés d'une forteresse" 
                                className="inline-img large" 
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="resource-dossier">
                            <div className="dossier-header">
                                <h3>Principes Mécaniques</h3>
                                <p>La réduction des forces de cisaillement et l'optimisation thermique au cœur de la conception architecturale.</p>
                            </div>
                            <div className="dossier-cards grid-2">
                                <div className="dossier-card box-style">
                                    <span className="card-tag">Structure</span>
                                    <h4>Sismique</h4>
                                    <p>L'inclinaison des murs (10 à 20 degrés vers l'intérieur) abaisse le centre de gravité, dispersant les ondes vers la base massive au lieu de cisailler les étages.</p>
                                </div>
                                <div className="dossier-card box-style">
                                    <span className="card-tag">Matériau</span>
                                    <h4>Thermique</h4>
                                    <p>Murs en pisé épais accumulant le violent rayonnement diurne pour le restituer lentement pendant la nuit glaciale.</p>
                                </div>
                                <div className="dossier-card box-style full-width">
                                    <span className="card-tag">Finition</span>
                                    <h4>Pigments</h4>
                                    <p>Les encadrements de fenêtres trapézoïdales sont peints en noir avec une suie absorbante pour maximiser l'apport solaire passif.</p>
                                </div>
                            </div>
                        </div>

                        <div className="narrative-split reverse">
                            <img 
                                src="src/assets/culture/chronicles/architecture/3.webp" 
                                alt="Détail de toit en aga" 
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="split-text">
                                <h3>L'Économie des Matériaux</h3>
                                <p>À plus de 4 000 mètres d'altitude, les arbres sont inexistants. Le bois est un luxe exclusivement réservé à l'ossature interne et acheminé à dos de yak.</p>
                                <p>La toiture plate est réalisée selon la technique de l'Aga : des branchages recouverts d'argile damée, créant une fine croûte étanche et un espace de vie pour le séchage l'été.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Chronicles;