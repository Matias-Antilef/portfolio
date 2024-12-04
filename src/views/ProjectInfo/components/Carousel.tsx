import PropTypes from "prop-types";
import React from "react";
import styles from "./carousel.module.css";

function Carousel({ data }) {
  return (
    <div className={styles.carousel}>
      <button className={styles.arrow_left}>
        <img src="/svg/arrow_left.svg" alt="left" />
      </button>
      {data.map((item) => (
        <img
          key={item.id}
          src={item.url}
          alt={item.alt}
          className={styles.slide}
        />
      ))}
      <button className={styles.arrow_right}>
        <img src="/svg/arrow_right.svg" alt="right" />
      </button>
      <span className={styles.indicators}>
        {data.map((_, idx) => (
          <button key={idx} onClick={() => {}}></button>
        ))}
      </span>
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
