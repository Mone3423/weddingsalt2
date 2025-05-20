import ServicesBlock from '../components/OurServices/ServicesBlock';
import ceremonyImg from '../assets/photos/services1.jpg';
import photoImg from '../assets/photos/services2.jpg';
import hotelImg from '../assets/photos/services3.jpg';
import cateringImg from '../assets/photos/services4.jpg';
import HoneymoonPackages from '../components/OurServices/HoneymoonPackages';
const cateringBullets = [
  { title: 'Local Specialties', text: 'Quinoa dishes, llama steaks, and authentic Bolivian cuisine.' },
  { title: 'Gourmet Options', text: 'Elegant meals prepared by top chefs for refined tastes.' },
  { title: 'Dietary Flexibility', text: 'Menus for vegans, vegetarians, and gluten-free guests.' },
  { title: 'Signature Cocktails', text: 'Drinks made with native ingredients, crafted for your story.' },
];

const cateringDesc =
  "From stylish plates to immersive food stations, our chefs craft menus that reflect your taste and amplify the beauty of your celebration.";

const accommodationBullets = [
  { title: 'Salt Hotels', text: 'Stay in hotels built entirely from salt — a once-in-a-lifetime novelty.' },
  { title: 'Luxury Lodges', text: 'Comfort and elegance with a touch of Bolivian charm.' },
  { title: 'Honeymoon Suites', text: 'Panoramic views of the flats and romantic amenities.' },
];

const accommodationDesc =
  "We work with top hotels like Luna Salada and Palacio de Sal, offering heated rooms, spas, and stunning Salar views to make your stay as memorable as your ceremony.";

const photoBullets = [
  { title: 'Expert Photographers', text: 'Familiar with the unique lighting of the salt flats.' },
  { title: 'Creative Videographers', text: 'Skilled in cinematic storytelling in vast landscapes.' },
  { title: 'Drone Footage', text: 'Capture the immensity and beauty from the sky.' },
  { title: 'Night Photography', text: 'Special gear to shoot beneath the stars.' },
];

const photoDesc =
  "Our team knows how to play with perspective to create iconic salt flat shots. We'll guide you through unique locations and angles so your album is as magical as your experience.";

const ceremonyBullets = [
  { title: 'Intimate Elopements', text: 'For couples seeking a private, romantic experience.' },
  { title: 'Traditional Ceremonies', text: 'Incorporating local Bolivian customs and rituals.' },
  { title: 'Modern Celebrations', text: 'Sleek, contemporary designs that complement the salt flats.' },
  { title: 'Themed Weddings', text: 'From bohemian chic to elegant luxury, we bring your theme to life.' },
];

const ceremonyDesc =
  "Our team works closely with each couple to tailor every aspect of the ceremony—from layout and decor to music and rituals. We've organized everything from sunrise ceremonies with colorful Andean textiles to starlit evening events with crystal decorations mimicking the salt formations.";

export default function OurServices() {
  return (
     <>
      <HoneymoonPackages/>
      <ServicesBlock
        id="ceremonies"
        image={ceremonyImg}
        title="Customized Ceremonies"
        subtitle="We offer fully customizable ceremonies to suit your vision"
        bullets={ceremonyBullets}
        description={ceremonyDesc}
      />
      <ServicesBlock
        id="Photography"
        image={photoImg}
        title="Photography & Videography"
        subtitle="Capturing every magical moment across the salt flats"
        bullets={photoBullets}
        description={photoDesc}
      />
      <ServicesBlock
        id="Acommodation"
        image={hotelImg}
        title="Accommodation"
        subtitle="Rest and relax in the most iconic lodgings in Uyuni"
        bullets={accommodationBullets}
        description={accommodationDesc}
      />
      <ServicesBlock
        id="Catering"
        image={cateringImg}
        title="Catering"
        subtitle="A delicious celebration of Bolivian and global cuisine"
        bullets={cateringBullets}
        description={cateringDesc}
      />
    </>
  );
}
