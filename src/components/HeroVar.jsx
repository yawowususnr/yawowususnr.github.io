import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroVar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    {
      link: "https://i.postimg.cc/9MCfcH31/F72A9455.jpg",
      description: "N/A",
    },
    {
      link: "https://i.postimg.cc/sX0hvLDS/ample-parking.jpg",
      description: "Ample Parking Space",
    },
    {
      link: "https://i.postimg.cc/vBYy4cnT/3.jpg",
      description: "Outdoor Space",
    },
    {
      link: "https://i.postimg.cc/KY2PMSG6/1.jpg",
      description: "Outdoor Space 2",
    },
    {
      link: "https://i.postimg.cc/2jbq02Sc/300-capacity.jpg",
      description: "300 Person Seating Capacity",
    },
    {
      link: "https://i.postimg.cc/7L1Yr4DZ/inside-1.jpg",
      description: "Indoor Event",
    },
    {
      link: "https://i.postimg.cc/VNzPMCQz/inside-4.jpg",
      description: "Indoor Lights",
    },
    {
      link: "https://i.postimg.cc/NFGLkqpL/temp-Image-S7c-Cw-K.avif",
      description: "N/A",
    },
    {
      link: "https://i.postimg.cc/PfKCrJ5D/temp-Imagez7-SOAJ.avif",
      description: "N/A",
    },
    {
      link: "https://i.postimg.cc/L8g5TVBk/temp-Image-Ubgsrv.avif",
      description: "N/A",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-[#FFF8ED] px-4 py-96 md:py-0 md:pb-0">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-[3rem] text-center uppercase mb-4 font-light tracking-widest">
            Mansa Pavilion
          </h1>
        </div>

        <div className="border-b-2 w-1/6 border-black pt-4"></div>

        <p className="mt-4 text-lg md:text-xl mb-6 font-medium tracking-wide text-center">
          Come to the perfect venue for all your needs
        </p>
        <Link to={"/request"}>
          <button className="bg-[#D8BA67] text-white px-6 py-4 rounded-md font-normal text-lg hover:bg-[#c4a857] transition duration-300">
            BOOK NOW
          </button>
        </Link>
      </div>

      {/* Slider Section */}
      <div className="hidden md:flex w-2/3 h-full">
        <Slider {...settings} className="w-full">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center h-screen">
              <img
                src={src.link}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroVar;
