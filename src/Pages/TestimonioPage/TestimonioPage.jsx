import './TestimonioPage.css';
import { motion } from 'framer-motion';

import heroImg1 from '../../assets/photos/testi1.jpg';
import heroImg2 from '../../assets/photos/testi2.jpg';
import heroImg3 from '../../assets/photos/testi3.jpg';

import gal1 from '../../assets/photos/testi4.jpg';
import gal2 from '../../assets/photos/testi5.jpg';
import gal3 from '../../assets/photos/testi6.jpg';

export default function TestimonyPage() {
    return (
        <div className="testimony-wrapper">
            {/* HERO */}
            <section className="testimony-hero">
                <div className="testimony-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Jonathan & Dakyo
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        “Uyuni was the most magical place we could have dreamed of. The team handled everything beautifully, from sunrise shots to our candlelit dinner in the middle of the flats. We'll never forget it.”
                    </motion.p>
                </div>

                <motion.div
                    className="testimony-stack"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {[heroImg1, heroImg2, heroImg3].map((img, i) => (
                        <motion.div
                            className="stacked-img"
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={img} alt={`Gallery ${i + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>

            </section>

            {/* PACKAGE INFO */}
            <section className="testimony-package-details">
                <h3>Salt Flat Explorer Package</h3>
                <p>
                    Jonathan and Daekyo chose our Salt Flat Explorer Package for their intimate elopement. Their experience included:
                </p>
                <ul>
                    <li>A sunrise ceremony on the salt flats</li>
                    <li>Professional photography and videography services</li>
                    <li>Gourmet catering featuring local Bolivian cuisine</li>
                    <li>5-night stay in our partner luxury salt hotel</li>
                    <li>Private guided tours of Salar de Uyuni and surrounding attractions</li>
                </ul>
                <p>
                    The couple particularly praised our attention to detail in capturing stunning photographs that played with the unique
                    perspective of the salt flats. They also commended our team's ability to create an intimate and romantic atmosphere
                    despite the vast open space of the location.
                </p>
            </section>


            {/* GALLERY */}
            <section className="testimony-gallery">
                {[gal1, gal2, gal3].map((img, i) => (
                    <motion.div
                        className="gallery-img"
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <img src={img} alt={`gallery-${i + 1}`} />
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
