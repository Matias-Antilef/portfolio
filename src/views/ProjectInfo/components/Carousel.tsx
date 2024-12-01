import PropTypes from "prop-types";
import React from "react";
import styles from "./carousel.module.css";

function Carousel({ data }) {
  return (
    <div>
      {data.map((item) => (
        <img key={item.id} src={item.url} alt={item.alt} />
      ))}
    </div>
  );
}

Carousel.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
