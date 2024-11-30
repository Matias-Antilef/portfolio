import { Link } from "react-router";
import styles from "./card-project.module.css";
import propTypes from "prop-types";
import PropTypes from "prop-types";
import { PublicRoutes } from "../../../../routes/routes";

function CardProject({ stack, id, img, title, status }) {
  return (
    <article className={styles.card_container}>
      <div className={`${status ? styles.status_true : styles.status_false}`}>
        <span>{status ? "Terminado" : "En proceso"}</span>
      </div>
      <Link to={`/${PublicRoutes.PROJECT}/${id}`}>
        <div className={styles.image_container}>
          <img src={img} alt="" />
        </div>
      </Link>
      <div className={styles.stack_container}>
        <h5> {title} </h5>
        <ul>
          {stack &&
            stack.map((res) => (
              <div key={res} className={styles.tecno_container}>
                <img
                  src={`/svg/${res.toLowerCase()}.svg`}
                  alt={`${res} icon`}
                  className="object-cover"
                />
                <li> {res} </li>
              </div>
            ))}
        </ul>
      </div>
    </article>
  );
}

CardProject.propTypes = {
  stack: propTypes.arrayOf(PropTypes.string),
  id: propTypes.number,
  title: propTypes.string,
  img: propTypes.string,
  status: propTypes.bool,
};

export default CardProject;
