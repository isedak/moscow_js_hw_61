import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MySlider.css';
import galleryOne from '../../assets/img/gallery-1.jpg';
import galleryTwo from '../../assets/img/gallery-2.jpg';
import galleryThree from '../../assets/img/gallery-3.jpg';
import galleryFour from '../../assets/img/gallery-4.jpg';
import galleryFive from '../../assets/img/gallery-5.jpg';
import gallerySix from '../../assets/img/gallery-6.jpg';
import gallerySeven from '../../assets/img/gallery-7.jpg';
import galleryEight from '../../assets/img/gallery-8.jpg';
import galleryNine from '../../assets/img/gallery-9.jpg';
import galleryTen from '../../assets/img/gallery-10.jpg';

const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="corusel-box">
            <Slider {...settings}>
                <div>
                    <p className="gallery-text">The Bolshoi Theatre</p>
                    <img className="w-100"
                        alt={'galleryOne'}
                        src={galleryOne} />
                </div>
                <div>
                    <p className="gallery-text">The Bolshoi Theatre</p>
                    <img className="w-100"
                        alt={'galleryTwo'}
                        src={galleryTwo} />
                </div>
                <div>
                    <p className="gallery-text">The Zaryadye Park</p>
                    <img className="w-100"
                        alt={'galleryThree'}
                        src={galleryThree} />
                </div>
                <div>
                    <p className="gallery-text">The Tretyakov Gallery</p>
                    <img className="w-100"
                        alt={'galleryFour'}
                        src={galleryFour} />
                </div>
                <div>
                    <p className="gallery-text">The Tretyakov Gallery</p>
                    <img className="w-100"
                        alt={'galleryFive'}
                        src={galleryFive} />
                </div>
                <div>
                    <p className="gallery-text">The New Tretyakov Gallery</p>
                    <img className="w-100"
                        alt={'gallerySix'}
                        src={gallerySix} />
                </div>
                <div>
                    <p className="gallery-text">VDNH</p>
                    <img className="w-100"
                        alt={'gallerySeven'}
                        src={gallerySeven} />
                </div>
                <div>
                    <p className="gallery-text">The Komsomolskaya Metro Station</p>
                    <img className="w-100"
                        alt={'galleryEight'}
                        src={galleryEight} />
                </div>
                <div>
                    <p className="gallery-text">The Park Pobedy Metro Station</p>
                    <img className="w-100"
                        alt={'galleryNine'}
                        src={galleryNine} />
                </div>
                <div>
                    <p className="gallery-text">The Gagarin Square</p>
                    <img className="w-100"
                        alt={'galleryTen'}
                        src={galleryTen} />
                </div>
            </Slider>
        </div>
    );
};

export default MySlider;