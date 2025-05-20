import { motion } from 'framer-motion';
import './Testimonials.css';
import { Link } from 'react-router-dom';

import img2 from '../../assets/photos/testi2.jpg';
import img3 from '../../assets/photos/testi3.jpg';
import img4 from '../../assets/photos/testi4.jpg';
import img5 from '../../assets/photos/testi6.jpg';

export default function Testimonials() {
  const photos = [img3, img4, img5];

  const positions = [
    { x: -200, y: -0, rotate: -5 },
    { x: 0, y: 0, rotate: 0 },      // centered
    { x: 200, y: -0, rotate: 5 },
  ];

  return (
    <section className="testimonial-container">
      <h2 className="testimonial-title">Testimonios</h2>
      <h3 className="testimonial-names">Jonathan & Dakyo</h3>

      <div className="testimonial-stack">
        {photos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="testimonial-photo"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: positions[i].x,
              y: positions[i].y,
              rotate: positions[i].rotate,
            }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
        ))}

        <motion.img
          src={img2}
          className="testimonial-photo main"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>

  <Link to="/testimonio" className="testimonial-btn">Learn More</Link>

    </section>
  );
}
