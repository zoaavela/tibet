import "./ArchiveHub.css";
import { Link } from "react-router-dom";

const ARCHIVES = [
    {
        id: "galerie",
        title: "Galerie",
        desc: "Une collection exhaustive d'images sourcées et contextualisées retraçant l'histoire du Toit du Monde.",
        path: "/galerie",
        className: "col-galerie"
    },
    {
        id: "bibliographie",
        title: "Bibliographie",
        desc: "Les piliers académiques et littéraires ayant servi à l'élaboration de ce fonds documentaire immersif.",
        path: "/sources",
        className: "col-bibliographie"
    },
    {
        id: "glossaire",
        title: "Glossaire",
        desc: "Un répertoire encyclopédique des concepts métaphysiques et techniques de la civilisation tibétaine.",
        path: "/glossaire",
        className: "col-glossaire"
    }
];

export default function ArchiveHub() {
    return (
        <div className="archive-hub-root">
            {ARCHIVES.map((item) => (
                <div key={item.id} className={`archive-column ${item.className}`}>
                    <div className="archive-col-content">
                        <h2 className="archive-col-title">{item.title}</h2>
                        <div className="menu-col-divider" />
                        <p className="archive-col-desc">{item.desc}</p>
                        <Link to={item.path} className="archive-col-btn">
                            Explorer
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
