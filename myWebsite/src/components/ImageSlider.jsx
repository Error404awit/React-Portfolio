import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, darkMode }) => {
  const [Current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(Current === length - 1 ? 0 : Current + 1);
  };

  const prevSlide = () => {
    setCurrent(Current === 0 ? length - 1 : Current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className={`left-arrow ${darkMode ? "text-[#f5f5f5]" : ""}`}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={`right-arrow ${darkMode ? "text-[#f5f5f5]" : ""}`}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === Current ? "slide active" : "slide"}
            key={index}
          >
            {index === Current && (
              <img src={slide.image} alt="Skills Image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
