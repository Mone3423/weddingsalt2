import { motion } from 'framer-motion';
import './Services.css';
import { Link } from 'react-router-dom';


import img1 from '../../assets/photos/hero2.jpg';
import img2 from '../../assets/photos/hero1.jpg';
import img3 from '../../assets/photos/heroser3.jpg';
import img4 from '../../assets/photos/heroser4.jpg';

const services = [
    {
    title: 'Ceremony Setup',
    image: img4,
    link: '/services#ceremony',
    type: 'horizontal',
  },
  
  {
    title: 'Acommodation',
    image: img2,
    link: '/services#Acommodation',
    type: 'vertical',
  },
  {
    title: 'Catering',
    image: img3,
    link: '/services#Catering',
    type: 'vertical',
  },
  {
    title: 'Photography & Video',
    image: img1,
    link: '/services#Photography',
    type: 'horizontal',
  },
 
];

export default function Services() {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="service-square">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className={`service-box ${s.type}`}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={s.link}>
              <img src={s.image} alt={s.title} className="service-img" />
              <div className="service-overlay">
                <h3>{s.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
