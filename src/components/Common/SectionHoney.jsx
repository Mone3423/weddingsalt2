import { motion } from 'framer-motion';
import './SectionHoney.css';
import { Link } from 'react-router-dom';

export default function HoneymoonSection() {
  return (
    <section className="honeymoon-section">
      <div className="overlay">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="honeymoon-title"
        >
          Explore our honeymoon packages and find<br />
          the perfect adventure for you and your partner. Get more information!
        </motion.h2>
        <div className="honeymoon-buttons">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn primary">
              Contact us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/services" className="btn secondary">
              Our services
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
