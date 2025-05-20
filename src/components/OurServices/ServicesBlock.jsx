import { motion } from 'framer-motion';
import './ServicesBlock.css';
import { Link } from 'react-router-dom';

export default function ServicesBlock({ id, image, title, subtitle, bullets, description }) {
  return (
    <>
      <motion.section
        id={id} 
        className="services-hero-block"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="overlay">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="buttons">
            <Link to="/contact">
                    <button className="btn alt">Contact Us</button>
                </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="services-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="services-list">
          <ul>
            {bullets.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="services-desc fade-in">
          <p>{description}</p>
        </div>
      </motion.section>
    </>
  );
}
