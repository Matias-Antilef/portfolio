import { Link } from "react-router-dom";
import styles from "./project-info.module.css";
import { PublicRoutes } from "../../../routes/routes";
import { useState } from "react";

function ProjectInfo() {
  const images = ["/a.png", "/a.png", "/a.png", "/a.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className={styles.proyect_container}>
      <div className={styles.links_navbar}>
        <nav className={styles.nav}>
          <Link className={styles.back} to={`/${PublicRoutes.HOME}`}>
            Volver
          </Link>
          <Link className={styles.demo} to={"#"}>
            Ver demo
          </Link>
          <Link
            className={styles.linkedin}
            to={"https://www.google.com"}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            className={styles.github}
            to={"https://www.google.com"}
            target="_blank"
          >
            Github
          </Link>
        </nav>
      </div>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handlePrev} className={styles.prevButton}>
          ❮
        </button>
        <button onClick={handleNext} className={styles.nextButton}>
          ❯
        </button>
      </div>

      <div>
        <h1>UTLP Gestión academaca</h1>

        <div>
          <ul>
            <li>Rutas protegidas</li>
            <li>Sistema de roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProjectInfo;
