import { useState, useEffect } from "react";
import "./LaPazPackages.css";
import PaymentInfo from '../../components/PaydmentInfo/PaymentInfo' 

const heroImages = [
  "/photos/honey.jpg",
  "/photos/honey.jpg",
  "/photos/honey.jpg",
];

const packages = [
  {
    title: "Esencial Package",
    price: "$750",
    description: "Comprehensive coverage with a lead photographer and two videographers...",
    features: ["Lead photographer + Two videographers", "7-hour coverage", "Digital delivery"],
    photo: ["400-500 edited photos", "50 postcard prints"],
    film: ["15-20 min documentary", "3-5 min highlights"],
    images: ["/images/LAPAZ/WeddingsPhotos1.jpg", "/images/LAPAZ/WeddingsPhotos6.jpg"],
  },
  {
    title: "Classic Package",
    price: "$1,250",
    description: "Complete professional coverage for traditional weddings.",
    features: ["Photographer + 2 filmmakers + assistant", "9-hour coverage", "Digital delivery"],
    photo: ["600-700 photos", "Premium photobook"],
    film: ["20-25 min documentary", "Cinematic highlights"],
    images: ["/images/LAPAZ/WeddingsPhotos2.jpg", "/images/LAPAZ/WeddingsPhotos8.jpg"],
  },
  // Agrega los demás paquetes igual
];

export default function LaPazPackages() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lp-container">
      <section className="lp-hero" style={{ backgroundImage: `url(${heroImages[currentHero]})` }}>
        <div className="lp-hero-text">
          <h1>WEDDING COLLECTIONS</h1>
          <p>Capture every moment of your wedding in images that last forever.</p>
        </div>
      </section>

      <div className="lp-packages">
        {packages.map((pkg, i) => (
          <div className="lp-package" key={i}>
            <div className="lp-images">
              {pkg.images.map((img, j) => (
                <img key={j} src={img} alt={`${pkg.title} ${j}`} />
              ))}
            </div>
            <div className="lp-content">
              <h2>{pkg.title}</h2>
              <span className="lp-price">{pkg.price}</span>
              <p>{pkg.description}</p>
              <div className="lp-list">
                <h3>Features</h3>
                <ul>{pkg.features.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
                <h3>Photo</h3>
                <ul>{pkg.photo.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
                <h3>Film</h3>
                <ul>{pkg.film.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
        <PaymentInfo />
    </div>
  );
}
