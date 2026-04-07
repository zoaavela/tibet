// Gallery.jsx
import React from "react";
import "./Gallery.css";
import image1 from "../../assets/archives/galerie/1.jpg";
import image2 from "../../assets/archives/galerie/2.jpg";
import image3 from "../../assets/archives/galerie/3.jpg";
import image4 from "../../assets/archives/galerie/4.jpg";
import image5 from "../../assets/archives/galerie/5.jpg";
import image6 from "../../assets/archives/galerie/6.jpg";
import image7 from "../../assets/archives/galerie/7.jpg";
import image8 from "../../assets/archives/galerie/8.jpg";
import image9 from "../../assets/archives/galerie/9.jpg";
import image10 from "../../assets/archives/galerie/10.jpg";

export default function Gallery() {
    const galleryItems = [
        {
            id: 1,
            title: "Moulins à Prières en Mouvement",
            meta: "Photographie",
            desc: "Alignement de moulins à prières traditionnels en action. Leur rotation rapide libère les mantras inscrits vers les cieux, diffusant la compassion et la sagesse dans le vent.",
            img: image1,
            credit: "Tsem Rinpoche - Spectacular Dorje Shugden Mural in Kathmandu, Nepal!",
        },
        {
            id: 2,
            title: "La Voûte Sacrée",
            meta: "Photographie",
            desc: "L'intérieur d'un temple tibétain révélant une architecture complexe et des ornements foisonnants. Des statues dorées et des peintures rituelles cartographient le cosmos bouddhiste et le chemin vers l'éveil.",
            img: image2,
            credit: "Frederic Hodiesne via Adobe Stock",
        },
        {
            id: 3,
            title: "Thangka Mandala Courroucé",
            meta: "Peinture / Thangka",
            desc: "Une peinture de Thangka complexe dépeignant un mandala dynamique de déités protectrices. La géométrie et les couleurs vives symbolisent la transmutation des passions en sagesse et la protection du Dharma.",
            img: image3,
            credit: "Tibet Art Wallpapers",
        },
        {
            id: 4,
            title: "L'Ascension Silencieuse",
            meta: "Photographie",
            desc: "Un moine en robe ocre rouge gravit les marches de pierre séculaires. Le contraste puissant entre les couleurs et la chaux d'un blanc éclatant définit l'architecture et la dévotion monastique.",
            img: image4,
            credit: "iStock",
        },
        {
            id: 5,
            title: "L'Épopée Nomade",
            meta: "Peinture ancienne / Fresque",
            desc: "Détail d'une peinture ancienne illustrant une caravane de cavaliers tibétains. L'œuvre, accompagnée de calligraphies, narre l'histoire épique, la culture martiale et les traditions équestres des peuples du toit du monde.",
            img: image5,
            credit: "Dunhuang Mogao Cave via Wikimedia Commons",
        },
        {
            id: 6,
            title: "Géométrie de l'Ombre",
            meta: "Photographie",
            desc: "Un homme descend les marches d'un édifice imposant. Les hauts murs rouges, ponctués de fenêtres géométriques, créent une composition visuelle minimaliste et vertigineuse, préparant l'esprit à l'annihilation de lego.",
            img: image6,
            credit: "dabananabunch via Flickr",
        },
        {
            id: 7,
            title: "L'Océan Rouge de Larung Gar",
            meta: "Photographie",
            desc: "Vue spectaculaire sur l'institut de Larung Gar. Des milliers de petites habitations en bois rouge s'entassent organiquement à flanc de montagne, cœur battant de l'étude et de la pratique du bouddhisme tibétain.",
            img: image7,
            credit: "Freepik",
        },
        {
            id: 8,
            title: "La Bibliothèque du Dharma",
            meta: "Photographie",
            desc: "Des centaines de textes sacrés (pechas) sont empilés dans les rayonnages d'une bibliothèque monastique séculaire. Chaque feuillet, préservé entre bois et tissu, garde la sagesse et les enseignements du Dharma.",
            img: image8,
            credit: "Tibet Trail via Pinterest",
        },
        {
            id: 9,
            title: "Le Chemin des Lumières",
            meta: "Photographie",
            desc: "Une fidèle progresse à travers un océan de lampes à beurre, avec un grand temple doré s'élevant en arrière-plan. La convergence des lumières et de l'architecture cartographie le cosmos bouddhiste et le chemin vers l'éveil.",
            img: image9,
            credit: "Freepik",
        },
        {
            id: 10,
            title: "La Jeune Gardienne du Toit du Monde",
            meta: "Photographie",
            desc: "Portrait d'une jeune fille tibétaine parée de bijoux traditionnels en turquoise et corail. Son regard intense et fier incarne la résilience, la culture et l'identité des peuples de haute altitude.",
            img: image10,
            credit: "@wroclaw.here via Instagram",
        },
    ];

    return (
        <div className="gallery-page-container">
            <div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">00</span>
                    <span className="label-category">EXPOSITION</span>
                </div>
                <h1 className="label-title">Galerie</h1>
                <div className="label-divider"></div>
            </div>

            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <article key={item.id} className="gallery-item">
                        <figure className="gallery-figure">
                            <div className="gallery-img-wrapper">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <span className="img-credit">
                                (
                                {[
                                    "Tibet Art Wallpapers",
                                    "iStock",
                                    "Freepik",
                                    "Tsem Rinpoche - Spectacular Dorje Shugden Mural in Kathmandu, Nepal!",
                                ].includes(item.credit)
                                    ? "Source"
                                    : "Crédit"}{" "}
                                : {item.credit})
                            </span>
                        </figure>
                        <div className="gallery-info">
                            <h2>{item.title}</h2>
                            <p className="gallery-meta">{item.meta}</p>
                            <p className="gallery-desc">{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
