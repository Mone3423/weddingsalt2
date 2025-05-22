import { useState, useEffect } from "react";
import "./LaPazPackages.css";
import PaymentInfo from '../../components/PaydmentInfo/PaymentInfo'

const heroImages = [
  "/images/LAPAZ/WeddingsPhotos3.jpg",
  "/images/LAPAZ/WeddingsPhotos4.jpg",
  "/images/LAPAZ/WeddingsPhotos5.jpg",
];

const packages = [
  {
    title: "Esencial Package",
    price: "$750",
    description: "Comprehensive coverage with a lead photographer and two videographers for a complete wedding documentation.",
    images: [
      "/images/LAPAZ/WeddingsPhotos1.jpg",
      "/images/LAPAZ/WeddingsPhotos6.jpg",
      "/images/LAPAZ/WeddingsPhotos14.jpg",
    ],
    features: [
      "Lead photographer + Two videographers",
      "7-hour coverage (civil/religious ceremony, couple session, reception)",
      "Digital delivery of photos & video on USB"
    ],
    photo: [
      "400-500 edited high-resolution photos",
      "50 postcard-sized prints"
    ],
    film: [
      "15-20 minute documentary video including:",
      "- Ceremony",
      "- Couple session",
      "- Toast",
      "- First dance",
      "- Party",
      "- Garter toss",
      "- Bouquet toss",
      "- Cake cutting",
      "3-5 minute highlights reel"
    ]
  },
  {
    title: "Classic Package",
    price: "$1.250",
    description: "Complete professional coverage for traditional weddings",
    images: [
      "/images/LAPAZ/WeddingsPhotos2.jpg",
      "/images/LAPAZ/WeddingsPhotos8.jpg",
      "/images/LAPAZ/WeddingsPhotos10.jpg",
    ],
    features: [
      "Lead photographer + Two filmmakers + Assistant",
      "Pre-wedding and post-wedding sessions (2 hours each)",
      "9-hour coverage (preparations, ceremonies, reception)",
      "Digital delivery on USB"
    ],
    photo: [
      "600-700 edited high-resolution photos",
      "80 postcard-sized prints",
      "Premium photo book 20x30cm (20 pages)"
    ],
    film: [
      "20-25 minute documentary video including:",
      "• Getting ready",
      "• Civil/religious ceremony",
      "• Couple session",
      "• Toast and first dance",
      "• Full party coverage",
      "• Traditions (garter toss, bouquet toss, cake cutting)",
      "3-5 minute cinematic highlights"
    ]
  },
  {
    title: "Premium Elite",
    price: "$1.667*", // *Conversión aproximada
    description: "Ultimate wedding coverage with professional team and drone technology",
    images: [
      "/images/LAPAZ/WeddingsPhotos14.jpg",
      "/images/LAPAZ/WeddingsPhotos1.jpg",
      "/images/LAPAZ/WeddingsPhotos6.jpg"
    ],
    features: [
      "Two photographers + Two filmmakers + Assistants",
      "Pre-wedding & post-wedding sessions (3 hours each)",
      "Full-day wedding coverage (12+ hours)",
      "Aerial photography & videography with professional drone",
      "Premium USB delivery with custom design"
    ],
    photo: [
      "800-1000 edited high-resolution photos",
      "100 postcard prints (4x6 in)",
      "Premium 12x12in hardcover photo book (30 pages)",
      "Two 8x8in mini photo books for parents/godparents"
    ],
    film: [
      "30-40 minute cinematic documentary including:",
      "• Pre-wedding preparations",
      "• Full ceremony coverage",
      "• Professional couple session",
      "• Complete toast & speeches",
      "• First dance highlights",
      "• Full party documentation",
      "• Traditions (garter/bouquet toss, cake cutting)",
      "• Post-wedding moments & farewell",
      "5-7 minute drone highlights reel",
      "Social media version (1 minute)"
    ]
  },
  {
    title: "Intimate Essence",
    price: "$217", // *Conversión aproximada
    description: "Tailored coverage for small weddings and private ceremonies",
    images: [
      "/images/LAPAZ/WeddingsPhotos7.jpg",
      "/images/LAPAZ/WeddingsPhotos15.jpg",
      "/images/LAPAZ/WeddingsPhotos16.jpg"
    ],
    features: [
      "Lead photographer + Two filmmakers",
      "2-4 hour coverage",
      "Essential moments: civil ceremony, couple session, first dance",
      "Digital delivery on premium USB"
    ],
    photo: [
      "100-200 edited high-resolution photos",
      "1 premium 12x16in print on Trupan board (frame not included)"
    ],
    film: [
      "5-10 minute cinematic highlights featuring:",
      "• Civil ceremony key moments",
      "• Best couple session shots",
      "• First dance highlights",
      "• Emotional details and reactions"
    ]
  }

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
      <section
        className="lp-hero"
        style={{ "--hero-bg": `url(${heroImages[currentHero]})` }}
      >

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
