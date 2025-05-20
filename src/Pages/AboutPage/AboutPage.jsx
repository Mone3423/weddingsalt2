import './AboutUsPage.css';
import { motion } from 'framer-motion';
import heroImg from '../../assets/photos/aboutus.jpg';
import logo1 from '../../assets/photos/logoal.png';
import logo2 from '../../assets/photos/Logo.png';


export default function AboutUsPage() {
    return (
        <div className="about-wrapper">
            {/* Hero */}
            <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="about-hero-overlay">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        At Uyuni Weddings, we are passionate about creating extraordinary experiences
                        in one of the world’s most surreal destinations – the Salar de Uyuni.
                    </motion.p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="about-section">
                <motion.div
                    className="about-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Story</h2>
                    <p>
                        What started in 2015 by a local photographer has grown into a passionate team of
                        wedding planners, photographers, and hospitality professionals. From intimate
                        elopements to grand celebrations, every event is a tribute to love and nature.
                    </p>
                </motion.div>

                <motion.div
                    className="about-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2>Our Mission</h2>
                    <ul>
                        <li>Create bespoke wedding experiences that reflect each couple’s vision</li>
                        <li>Showcase Bolivia’s salt flats to the world</li>
                        <li>Support local communities through sustainable tourism</li>
                        <li>Deliver exceptional service from first contact to final farewell</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="about-block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>Our Expertise</h2>
                    <p>
                        With deep local knowledge and years of experience, we are the trusted experts for salt flat weddings.
                        Our strong relationships with local vendors and mastery of Uyuni’s unique logistics mean your celebration
                        is in capable hands.
                    </p>
                </motion.div>
                <section className="about-companies">
                    <h2>Organized by</h2>
                    <div className="company-logos">
                        <div className="company-card">
                            <img src={logo1} alt="Company 1" />
                            <p>Alpha Llama </p>
                            <p>[Photo and Video] </p>
                        </div>
                        <div className="company-card">
                            <img src={logo2} alt="Company 2" />
                            <p>Andes2 Amazon</p>
                            <p>Travel Agency</p>
                        </div>
                       
                    </div>
                </section>
            </section>
        </div>
    );
}
