import { useState } from 'react';
import './faq.css';

const faqs = [
  {
    question: 'What is included in the honeymoon package?',
    answer: 'Lodging, private tours, romantic dinners, and photos in magical places.',
  },
  {
    question: 'Can we customize our trip?',
    answer: 'Yes, every experience is designed around your style and preferences.',
  },
  {
    question: 'Do you offer multilingual guides?',
    answer: 'Absolutely, we have guides who speak English, Spanish, and French.',
  },
    {
    question: "When is the best time to have a wedding on the Salar de Uyuni?",
    answer: "It depends on your dream wedding: 🌞 Dry Season (May–Nov) for a vast white backdrop. 💦 Wet Season (Dec–April) for stunning mirror-like reflections.",
  },
  {
    question: " How far in advance should we book our salt flat wedding?",
    answer: "We recommend booking 6–12 months in advance to secure availability and plan all details smoothly. Dream weddings take time! 💍",
  },
  {
    question: " Are there legal requirements for getting married in Bolivia?",
    answer: "Yes! Bolivia has specific legal requirements for foreign couples. Our expert wedding planners will guide you through the process. No stress, just love! ❤️",
  },
  {
    question: " Can you help with travel arrangements for our guests?",
    answer: "Absolutely! We coordinate flights, transfers, and accommodations to ensure a seamless experience for you and your guests. Just enjoy the moment! ✨",
  },
  {
    question: " What types of accommodation are available near the salt flats?",
    answer: "From luxury salt hotels to cozy lodges, we offer carefully selected stays that provide comfort and an unforgettable experience.",
  },
  {
    question: " Is it possible to have a religious ceremony on the salt flats?",
    answer: "Yes! We can arrange both civil and religious ceremonies. Just let us know your requirements, and we’ll make it happen.",
  },
  {
    question: " What should we and our guests wear for a salt flat wedding?",
    answer: "Wear comfortable, breathable clothing. For photos, consider the striking white backdrop. And don’t forget sunglasses & sunscreen! 😎",
  },
  {
    question: " Can you cater to special dietary requirements?",
    answer: "Yes! Our catering team offers vegetarian, vegan, gluten-free, and other dietary options. Let us know your preferences in advance!",
  },
  {
    question: " What photography services do you offer?",
    answer: "We provide professional photographers & videographers who specialize in capturing the magic of salt flat weddings. Picture-perfect memories! 📷",
  },
  {
    question: " Are there activities for guests before or after the wedding?",
    answer: "Absolutely! We offer sunrise tours, stargazing, and visits to nearby attractions like colorful lagoons and ancient volcanoes. Adventure awaits! 🌄",
  },
  {
    question: " How do we transport decorations and personal items to the salt flats?",
    answer: "Our team handles all logistics, ensuring everything arrives safely. We recommend bringing any important personal items with you.",
  },
  {
    question: " Is there a limit to the number of guests we can invite?",
    answer: "We can accommodate different group sizes, but due to the remote location, we recommend keeping it intimate. Let’s discuss your vision!",
  },
  {
    question: " What happens in case of bad weather?",
    answer: "No worries! We always have a backup plan. Depending on the season, we’ll provide alternative locations or adjust the timing for the perfect moment.",
  },
  {
    question: " Can you help with obtaining a marriage license in Bolivia?",
    answer: "Yes! We navigate the Bolivian legal system for you and assist with all the necessary paperwork. Focus on your love, we’ll handle the rest!",
  },
  {
    question: " Do you offer wedding insurance?",
    answer: "While we don’t provide insurance directly, we highly recommend it. We can suggest trusted providers to ensure peace of mind.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${active === index ? 'active' : ''}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              {item.question}
              <span className="faq-toggle">{active === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${active === index ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
