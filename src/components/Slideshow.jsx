import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  // Slider settings
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
      link: "https://i.postimg.cc/7L1Yr4DZ/inside-1.jpg",
      description: "Indoor Event",
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
      link: "https://i.postimg.cc/VNzPMCQz/inside-4.jpg",
      description: "Indoor Lights",
    },
    {
      link: "https://i.postimg.cc/2jbq02Sc/300-capacity.jpg",
      description: "300 Person Seating Capacity",
    },
    {
      link: "https://i.postimg.cc/sX0hvLDS/ample-parking.jpg",
      description: "Ample Parking Space",
    },
    {
      link: "https://i.postimg.cc/xT8HVJzn/PHOTO-2024-11-28-19-13-03.jpg",
      description: "more info",
    },
    {
      link: "https://i.postimg.cc/FKNHm8B3/PHOTO-2024-11-28-19-13-03-6.jpg",
      description: "no",
    },
  ];

  return (
    <div className="p-5 bg-[#F1E4C1] flex justify-center">
      <div className="max-w-7xl m-5">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src.link}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
              <h1 className="text-center">{src.description}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
