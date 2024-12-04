import styles from "./projects-section.module.css";
import propTypes from "prop-types";

function ProjectsSection({ children }) {
  return (
    <div className={styles.proyects_section}>
      <h1>Proyectos</h1>
      <div className={styles.projects_container}>{children}</div>
    </div>
  );
}

ProjectsSection.propTypes = {
  children: propTypes.node,
};

export default ProjectsSection;
