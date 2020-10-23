import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";
import three from "../../assets/images/3.jpg";
import "./MyCarousel.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
  return (
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src={one} />
      <div data-src={two} />
      <div data-src={three} />
    </AutoplaySlider>
  );
}

export default Slider;
