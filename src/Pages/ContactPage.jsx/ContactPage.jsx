import './ContactPage.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({
  name: '',
  email: '',
  message: '',
  service: '',
  date: '',
  budget: '',
  package: ''
});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2y2y0qk',     // <-- reemplaza con el tuyo
      'template_6w2fvgp',    // <-- reemplaza con el tuyo
      form,
      'RTqHV4710_Yu0dGrN'      // <-- reemplaza con el tuyo
    ).then(
      () => {
        alert('Message sent! 🎉');
        setForm({ name: '', email: '', message: '' });
      },
      (error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We're Here to Help!</p>
        <p>If you have any questions, inquiries, or just want to learn more about our services,
          feel free to send us a message. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
  <label>
    Name
    <input type="text" name="name" required value={form.name} onChange={handleChange} />
  </label>

  <label>
    Email
    <input type="email" name="email" required value={form.email} onChange={handleChange} />
  </label>

  <label>
    Preferred Service
    <select name="service" required value={form.service} onChange={handleChange}>
      <option value="">Select a service</option>
      <option value="Ceremony">Ceremony</option>
      <option value="Photography">Photography & Videography</option>
      <option value="Accommodation">Accommodation</option>
      <option value="Catering">Catering</option>
      <option value="Honeymoon">Honeymoon Packages</option>
    </select>
  </label>

  <label>
    Estimated Event Date
    <input type="date" name="date" value={form.date} onChange={handleChange} />
  </label>

  <label>
    Estimated Budget (USD)
    <input type="number" name="budget" value={form.budget} onChange={handleChange} />
  </label>

  <label>
    Preferred Package/Style
    <input type="text" name="package" value={form.package} onChange={handleChange} placeholder="Luxury, Boho, Traditional..." />
  </label>

  <label>
    Message
    <textarea name="message" rows="5" required value={form.message} onChange={handleChange} />
  </label>

  <button type="submit">Submit</button>
</form>


      <section className="contact-social">
        <h3>Connect With Us on Social Media</h3>
        <p>Stay updated with our latest weddings and stories. Follow us:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/andean_love_shots/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61570954643502" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://wa.me/71948121" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
