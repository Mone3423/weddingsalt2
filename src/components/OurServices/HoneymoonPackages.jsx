import './HoneymoonPackages.css';
import { motion } from 'framer-motion';
import imgHero from '../../assets/photos/honeyhero.jpg';
import img1 from '../../assets/photos/services4.jpg';
import img2 from '../../assets/photos/honey1.jpg';
import img3 from '../../assets/photos/honey.jpg';
import { Link } from 'react-router-dom';
const packages = [
    {
        title: 'Salt Flat Explorer Package (full day tour)',
        image: img1,
        features: [
            'Luxury accommodation in a salt hotel (first night)',
            'Private guided tour of Salar de Uyuni',
            'Sunrise photography session on the salt flats',
            'Romantic dinner',
            'Visit to Incahuasi Island',
            'Price: Starting from $2,000 per couple',
        ],
    },
    {
        title: 'Luxury Retreat Package (2 days/1 night)',
        image: img2,
        features: [
            'Luxury accommodation in a salt hotel (first night)',
            'Private guided tour of Salar de Uyuni',
            'Sunset photography session on the salt flats',
            'Romantic dinner',
            'Visit to Incahuasi Island',
            'Stargazing night experience',
            'Price: Starting from $2,500 per couple',
        ],
    },
    {
        title: 'Adventure Lovers Package (3 days/2 nights)',
        image: img3,
        features: [
            'Accommodation in salt hotel and desert ecolodge',
            'Extended Uyuni exploration',
            '4x4 excursion to colored lagoons & volcano',
            'Flamingo watching at Laguna Colorada',
            'Stargazing night with private guide',
            'Price: Starting from $3,500 per couple',
        ],
    },
];

export default function HoneymoonPackages() {
    return (
        <div className="honeymoon-wrapper">
            {/* HERO */}
            <section className="honeymoon-hero" style={{ backgroundImage: `url(${imgHero})` }}>
                <div className="hero-overlay">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Honeymoon Packages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        At Uyuni Weddings, we offer a range of honeymoon packages designed to extend the magic of your salt flat wedding experience.
                        Each package is customizable to suit your preferences and desired length of stay.
                    </motion.p>
                    <motion.div
                        className="tags"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <span>Airport transfers</span>
                        <span>Daily breakfast</span>
                        <span>24/7 concierge</span>
                        <span>Itinerary planning</span>
                    </motion.div>
                </div>
            </section>

            {/* PACKAGES */}
            {packages.map((pack, index) => (
                <motion.section
                    className={`honeymoon-package ${index % 2 !== 0 ? 'reverse' : ''}`}
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    <div className="package-img">
                        <img src={pack.image} alt={pack.title} />
                    </div>
                    <div className="package-content">
                        <h3>{pack.title}</h3>
                        <ul>
                            {pack.features.map((f, i) => (
                                <li key={i}>
                                    <span className={f.includes('Price') ? 'price' : ''}>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>
            ))}

            {/* CALL TO ACTION */}
            <motion.div
                className="honeymoon-cta"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h4>Ready to begin your unforgettable honeymoon adventure?</h4>
                <Link to="/contact">
                    <button className="cta-btn">Book Your Honeymoon</button>
                </Link>
            </motion.div>
        </div>
    );
}
