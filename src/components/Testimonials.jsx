import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaArrowUp,
} from "react-icons/fa";

import personImage from "../assets/testimonial-person.png";

const testimonialsData = [
  { id: 1, name: "Felix", role: "Developer", image: personImage, rating: 5 },
  { id: 2, name: "Sophia", role: "Designer", image: personImage, rating: 4 },
  { id: 3, name: "Liam", role: "Manager", image: personImage, rating: 5 },
  { id: 4, name: "Emma", role: "Engineer", image: personImage, rating: 5 },
];

const NextArrow = ({ onClick }) => (
  <button className="arrow-btn right" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow-btn left" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card-wrapper" key={testimonial.id}>
              <div className="testimonial-card">
                <div className="card-badge">
                  <FaArrowUp style={{ transform: "rotate(45deg)" }} />
                </div>
                <div className="card-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <div className="info-header">
                      <span className="name">{testimonial.name}</span>
                      <span className="role">{testimonial.role}</span>
                    </div>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr/>
    </section>
  );
};

export default Testimonials;
