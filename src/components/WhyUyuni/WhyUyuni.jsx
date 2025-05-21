import './WhyUyuni.css';
import img1 from '../../assets/photos/why.jpg';
import img2 from '../../assets/photos/why1.jpg';
import img3 from '../../assets/photos/why2.jpg';

export default function WhyUyuni() {
  return (
    <section className="why-container">
      <h2 className="why-title">Why choose <span>Salar de Uyuni?</span></h2>

      <div className="why-block">
        <img src={img1} alt="Surreal Landscapes" className="why-image" />
        <div className="why-text">
          <h3>Surreal Landscapes</h3>
          <p>
            The vast white expanse of Salar de Uyuni creates a dreamlike setting
            for your ceremony and photos. Imagine exchanging vows against
            an endless horizon where sky meets earth in perfect symmetry.
          </p>
        </div>
      </div>

      <div className="why-block reverse">
        <div className="why-text">
          <h3>Unique Photo Opportunities</h3>
          <p>
            Capture stunning wedding photos that play with perspective on the salt flats.
            From reflective surfaces during the rainy season to stark white backdrops
            in the dry season, every shot will be unforgettable.
          </p>
        </div>
        <img src={img2} alt="Unique opportunities for wedding photography" className="why-image" />

      </div>

      <div className="why-block">
        <img src={img3} alt="Cultural Experience" className="why-image" />
        <div className="why-text">
          <h3>Cultural Experience</h3>
          <p>
            Immerse yourselves and your guests in the rich Bolivian culture, from
            traditional music and dance to local cuisine and customs.
          </p>
        </div>
      </div>
    </section>
  );
}
