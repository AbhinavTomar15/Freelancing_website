import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={3}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

