import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import kws from '../images/web-dev.svg';
import geps from '../images/web.svg';
import protergia from '../images/hosting.svg';

const Core = () => {
  const clientImages = [
    { src: kws, alt: 'KWS' },
    { src: protergia, alt: 'Protergia' },
    { src: geps, alt: 'GEPS' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slides = clientImages.map((image, index) => (
    <div key={index}>
      <img
        src={image.src}
        alt={image.alt}
        style={{ height: '10rem', objectFit: 'cover', margin: '0 auto' }}
      />
    </div>
  ));

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Core Team
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Meet Our Core Team Members
          </h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <Slider {...settings}>
            {slides}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Core;
