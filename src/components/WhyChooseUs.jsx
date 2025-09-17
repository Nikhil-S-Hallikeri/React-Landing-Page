import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WhyChooseUs.css";

const cardData = [
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit.",
  },
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit. Tortor fames pellentesque pokslles ihii",
  },
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit. Tortor fames pellentesque pokslles ihii pellentesque tortor sit. Nisl sed eu velit volutpat.",
  },
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit. Tortor fames pellentesque pokslles ihii",
  },
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit.",
  },
  {
    title: "ullamcorper",
    content:
      "Lorem ipsum dolor sit amet consectetur. hdkdi Laoreet mattis porttitor natoque odio at. Ultricies nullam adipiscing ut morbi eget eleifend id. Eu consectetur molestie purus tristique et ultrices fames velit. Tortor fames pellentesque pokslles ihii",
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const WhyChooseUs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="why-choose-us-title">WHY CHOOSE US</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="card-wrapper">
                <div className="choose-us-card">
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className="enroll-now-btn-yellow">Enroll Now</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
