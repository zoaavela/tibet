// Menu.jsx
import { useNavigate } from "react-router-dom";
import "./Menu.css";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const AILES = [
    {
        id: "atlas",
        label: "L'Atlas",
        desc: "L'excellence des savoirs : science médicale Sowa Rigpa, artisanat sacré et sémiologie des tracés.",
        pages: [
            { id: "atlas", num: "01", label: "Savoirs du Plateau" },
        ],
    },
    {
        id: "society",
        label: "Société",
        desc: "L'adaptation au Vivant : nomadisme Drogpa, gastronomie d'altitude et l'écologie du 3ème Pôle.",
        pages: [
            { id: "society", num: "02", label: "Terres Vivantes" },
        ],
    },
    {
        id: "chronicles",
        label: "Chroniques",
        desc: "Le Récit des temps : de la fureur martiale du Yarlung à l'épopée de Gesar et l'architecture des Dzongs.",
        pages: [
            { id: "chronicles", num: "03", label: "Le Toit du Monde" },
        ],
    },
];

// ─── SOUS-COMPOSANTS ──────────────────────────────────────────────────────────

function MenuHub({ onNavigate }) {
    return (
        <div className="menu-columns-container">
            {AILES.map((aile) => (
                <div key={aile.id} className={`menu-column col-${aile.id}`}>
                    <div className="menu-col-bg" />
                    <div className="menu-col-content">
                        <h2 className="menu-col-title">{aile.label}</h2>
                        <div className="menu-col-divider" />
                        <p className="menu-col-desc">{aile.desc}</p>

                        <div className="menu-col-buttons">
                            {aile.pages.map((page) => (
                                <button
                                    key={page.id}
                                    className="menu-article-btn"
                                    onClick={() => onNavigate(`/${page.id}`)}
                                >
                                    <span className="btn-num">{page.num}</span>
                                    <span className="btn-label">{page.label}</span>
                                    <span className="btn-arrow">→</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────────────────────

export default function Menu() {
    const navigate = useNavigate();

    return (
        <div className="menu-root">
            <MenuHub onNavigate={navigate} />
        </div>
    );
}