// Gallery.jsx
import React from "react";
import "./Gallery.css";

export default function Gallery() {
    const galleryItems = [
        {
            id: 1,
            title: "Phurba Météorique",
            meta: "Fer et laiton • XVIIe siècle",
            desc: "Dague rituelle à trois faces utilisée pour clouer les forces démoniaques de l'ego. La lame ne tranche pas la chair, elle immobilise l'illusion.",
            img: "https://images.unsplash.com/photo-1622322306307-2a54ce05a1e2?q=80&w=800"
        },
        {
            id: 2,
            title: "Masque de Mahakala",
            meta: "Bois sculpté, pigments • Région du Kham",
            desc: "Protecteur courroucé du Dharma. Ses trois yeux perçoivent le passé, le présent et le futur. Sa fureur est une manifestation de compassion extrême.",
            img: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?q=80&w=800"
        },
        {
            id: 3,
            title: "Thangka Sanglant",
            meta: "Soie, cinabre, or • XIXe siècle",
            desc: "Peinture géométrique représentant l'architecture d'un mandala. Le rouge profond est obtenu à partir de minerai de cinabre broyé.",
            img: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=800"
        },
        {
            id: 4,
            title: "Kapala",
            meta: "Os humain, argent repoussé • Origine inconnue",
            desc: "Coupe crânienne rituelle. Utilisée dans les pratiques tantriques pour symboliser la destruction de la pensée dualiste et l'offrande de soi.",
            img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800"
        },
        {
            id: 5,
            title: "Kangling",
            meta: "Fémur, cuivre • Haut plateau",
            desc: "Trompe rituelle. Son hurlement guttural lors des danses Cham est censé terrifier les esprits malveillants et rappeler l'impermanence de la chair.",
            img: "https://images.unsplash.com/photo-1628155255474-05d9c6692b6a?q=80&w=800"
        },
        {
            id: 6,
            title: "Temple de l'Ombre",
            meta: "Pierre, chaux, suie • Monastère de Sakya",
            desc: "L'architecture même devient un outil de terreur sacrée. Les murs sombres et les couloirs étroits préparent l'esprit à l'annihilation de l'ego.",
            img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800"
        },
        {
            id: 7,
            title: "Damaru",
            meta: "Crânes, cuir, soie • XVIIIe siècle",
            desc: "Tambourin en forme de sablier. Son claquement sec invoque les divinités courroucées et marque le rythme implacable de l'impermanence.",
            img: "https://images.unsplash.com/photo-1517414609830-1af8d8a5eb6c?q=80&w=800"
        },
        {
            id: 8,
            title: "Dorje (Vajra)",
            meta: "Bronze sombre • Région de Tsang",
            desc: "Le foudre-diamant. Indestructible et fulgurant, il représente la nature ultime de l'esprit, coupant à travers l'ignorance avec la précision de l'éclair.",
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800"
        },
        {
            id: 9,
            title: "Parchemin Mantrique",
            meta: "Encre, cinabre, papier lokta • Trésor Terma",
            desc: "Syllabes germes (Bija) tracées au sang et au cinabre. La calligraphie n'est pas lue, elle est ressentie comme une présence physique et vibratoire.",
            img: "https://images.unsplash.com/photo-1564491775798-293e50669b93?q=80&w=800"
        },
        {
            id: 10,
            title: "Couronne Munda",
            meta: "Os, turquoise ternie • Monastère de Drepung",
            desc: "Diadème aux cinq crânes secs, porté par les Dharmapalas. Ils symbolisent la transmutation des cinq poisons de l'esprit en cinq sagesses transcendantes.",
            img: "https://images.unsplash.com/photo-1543818318-7b5f5dd007a6?q=80&w=800"
        }
    ];

    return (
        <div className="gallery-page-container">
            <div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">00</span>
                    <span className="label-category">EXPOSITION</span>
                </div>
                <h1 className="label-title">Archives</h1>
                <div className="label-divider"></div>
            </div>

            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <article key={item.id} className="gallery-item">
                        <div className="gallery-img-wrapper">
                            <img src={item.img} alt={item.title} />
                        </div>
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