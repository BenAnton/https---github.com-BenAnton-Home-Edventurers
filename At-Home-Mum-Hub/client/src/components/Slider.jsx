import { useEffect, useState } from "react";
import "./Slider.css";
import PropTypes from "prop-types";

function Slider({ titles, images }) {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (Array.isArray(images) && Array.isArray(titles)) {
      const combinedSlides = images.map((image, index) => ({
        image,
        title: titles[index],
      }));
      setSlides([
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
        ...combinedSlides,
      ]);
    }
  }, [images, titles]);

  return (
    <div className="slider">
      <div className="slider-track">
        {slides.map((slide, index) => (
          <div className="slide" key={`%{slide}-${index}`}>
            <img src={slide.image} alt={slide.title} />
            <h3 className="slide-title">{slide.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
