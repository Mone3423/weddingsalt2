import { motion } from 'framer-motion';
import './Hero.css';
import img1 from '../../assets/photos/hero1.jpg';
import img2 from '../../assets/photos/hero2.jpg';
import img3 from '../../assets/photos/hero3.jpg';
import img4 from '../../assets/photos/hero4.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Create unforgettable moments in Bolivia's Salar de Uyuni";

  // Máquina de escribir efecto
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-motion" />

      <div className="hero-images-layer">
        <motion.img
          src={img1}
          alt=""
          className="hero-img rotated top-left"
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ delay: 0.3 }}
        />
        <motion.img
          src={img2}
          alt=""
          className="hero-img rotated bottom-left"
          initial={{ opacity: 0, x: -50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ delay: 0.6 }}
        />
        <motion.img
          src={img3}
          alt=""
          className="hero-img rotated top-right"
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ delay: 0.4 }}
        />
        <motion.img
          src={img4}
          alt=""
          className="hero-img rotated bottom-right"
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ delay: 0.7 }}
        />
      </div>

      <motion.div
        className="hero-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title"> Uyuni Weddings</h1>
        <p className="hero-subtitle typewriter">{displayedText}</p>
        <Link to="/services" className="hero-button">
          Start Planning
        </Link>
      </motion.div>
    </section>
  );
}
