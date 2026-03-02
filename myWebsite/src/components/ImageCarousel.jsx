import "./slide.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function ImageCarousel({ darkMode }) {
  return <ImageSlider slides={SliderData} darkMode={darkMode} />;
}

export default ImageCarousel;
