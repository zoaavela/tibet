/* Glossary.jsx */
import "./Glossary.css";

const TERMS = [
    {
        num: "01",
        term: "VAJRAYĀNA",
        definition: "Surnommé le 'Véhicule de Diamant', c'est une branche tantrique radicale du bouddhisme tibétain. Elle met l'accent sur la transformation immédiate des émotions négatives en sagesse pure par le biais de méditations puissantes et de visualisations complexes.",
        origin: "Étymologie : Sanskrit"
    },
    {
        num: "02",
        term: "PHURBA",
        definition: "Dague rituelle à trois tranchants, ornée de visages de divinités sur son manche. Utilisée pour 'clouer' symboliquement les forces chaotiques et transmuter l'ignorance, le désir et la haine en clarté absolue au contact du sol.",
        origin: "Étymologie : Tibétain"
    },
    {
        num: "03",
        term: "AXIS MUNDI",
        definition: "Concept métaphysique désignant le 'Pied du Monde' ou le centre cosmique. Dans le bouddhisme, certains objets rituels comme le Phurba agissent comme un axe stabilisateur reliant le ciel et la terre, le divin et l'humain.",
        origin: "Étymologie : Latin"
    },
    {
        num: "04",
        term: "SOWA RIGPA",
        definition: "Littéralement 'Science de la Guérison', ce système médical traditionnel tibétain est l'un des plus anciens au monde. Il intègre herboristerie, astrologie et psychologie pour soigner l'individu dans sa globalité.",
        origin: "Étymologie : Tibétain"
    },
    {
        num: "05",
        term: "CHAM",
        definition: "Danses sacrées et masquées exécutées par les moines lors des festivals de monastères. Elles servent à soumettre les démons symboliques et à préparer l'esprit à l'éveil à travers le mouvement et le rythme des tambours.",
        origin: "Étymologie : Tibétain"
    },
    {
        num: "06",
        term: "VAJRAKĪLAYA",
        definition: "Déité courroucée associée à la puissance du Phurba. Elle incarne la force de la compassion 'impitoyable' qui tranche l'ego et les illusions avec une précision absolue, sans aucune colère réelle.",
        origin: "Étymologie : Sanskrit"
    },
    {
        num: "07",
        term: "DROGPA",
        definition: "Nom désignant les populations nomades pastorales des hautes steppes tibétaines. Ils vivent traditionnellement sous des tentes de laine de yak, préservant une culture archaïque de l'errance et de l'harmonie avec les éléments.",
        origin: "Étymologie : Tibétain"
    },
    {
        num: "08",
        term: "BODHISATTVA",
        definition: "Être ayant atteint ou étant sur le point d'atteindre l'état de Bouddha, mais choisissant délibérément de se réincarner dans le cycle des souffrances pour guider chaque être vivant vers la libération finale.",
        origin: "Étymologie : Sanskrit"
    },
    {
        num: "09",
        term: "YAK",
        definition: "Animal emblématique du haut-plateau, fournisseur essentiel de lait, de beurre, de laine et de force motrice. Il est inséparable de la survie physique et spirituelle des populations tibétaines depuis des millénaires.",
        origin: "Étymologie : Tibétain"
    }
];

export default function Glossary() {
    return (
        <div className="glossary-page-container">
            <div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">03</span>
                    <span className="label-category">ARCHIVES</span>
                </div>
                <h1 className="label-title">Glossaire</h1>
                <div className="label-divider"></div>
            </div>

            <section className="glossary-section">
                <p className="article-intro" style={{ maxWidth: '600px', marginBottom: '4rem' }}>
                    De l'étymologie sacrée aux concepts métaphysiques, cette archive répertorie les termes essentiels permettant de déchiffrer la civilisation de l'esprit.
                </p>

                <div className="glossary-grid">
                    {TERMS.map((item, index) => (
                        <div className="glossary-card" key={index}>
                            <span className="glossary-num">Index Ref. {item.num}</span>
                            <h2 className="glossary-term">{item.term}</h2>
                            <p className="glossary-definition">{item.definition}</p>
                            <span className="glossary-origin">{item.origin}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Side Pattern for large screens */}
            <div className="glossary-side-pattern"></div>
        </div>
    );
}
