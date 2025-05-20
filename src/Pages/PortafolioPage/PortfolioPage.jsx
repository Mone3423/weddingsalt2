import './PortafolioPage.css';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import img1 from '../../assets/photos/port1.jpg';
import img2 from '../../assets/photos/port2.jpg';
import img3 from '../../assets/photos/port3.jpg';
import img4 from '../../assets/photos/port4.jpg';


const images = [img1, img2, img3,img4];




export default function PortfolioPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div className="portfolio-wrapper">
            <section className="portfolio-header">
                <h1>Gallery</h1>
                <p>
                    Take a journey through our portfolio and see the magical moments we've created for couples at the breathtaking Salar de Uyuni.
                    From intimate ceremonies to grand celebrations, let our past work inspire your dream wedding.
                </p>
            </section>

            <div className="portfolio-gallery">
                {/* Horizontal full row */}
                <div className="portfolio-row">
                    <div className="portfolio-img full" onClick={() => openLightbox(0)}>
                        <img src={img1} alt="Wedding 1" />
                    </div>
                </div>

                {/* Two verticals */}
                <div className="portfolio-row two-cols">
                    <div className="portfolio-img" onClick={() => openLightbox(1)}>
                        <img src={img2} alt="Wedding 2" />
                    </div>
                    <div className="portfolio-img" onClick={() => openLightbox(2)}>
                        <img src={img3} alt="Wedding 3" />
                    </div>
                </div>
                  {/* Horizontal full row */}
                <div className="portfolio-row">
                    <div className="portfolio-img full" onClick={() => openLightbox(0)}>
                        <img src={img4} alt="Wedding 1" />
                    </div>
                </div>


            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    );
}
