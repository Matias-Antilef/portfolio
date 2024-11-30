import { Link } from "react-router";
import styles from "./link-styled.module.css";
import propTypes from "prop-types";
import React from "react";

function LinkStyled({ to, children }) {
  return (
    <Link to={to} className={styles.linkStyled}>
      {" "}
      {children}{" "}
    </Link>
  );
}

LinkStyled.prototype = {
  to: propTypes.string,
  children: propTypes.node,
};

export default LinkStyled;
