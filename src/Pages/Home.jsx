import Hero from '../components/Hero/Hero';
import WhyUyuni from '../components/WhyUyuni/WhyUyuni';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials'; 
import SectionHoney from '../components/Common/SectionHoney'; 
import FaqSection from '../components/Common/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUyuni />
      <Services />
      <Testimonials />
      <SectionHoney />
      <FaqSection />
    </>
  );
}
