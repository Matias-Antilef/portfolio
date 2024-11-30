import styles from "./projects-section.module.css";
import propTypes from "prop-types";

function ProjectsSection({ children }) {
  return <div className={styles.projects_container}>{children}</div>;
}

ProjectsSection.propTypes = {
  children: propTypes.node,
};

export default ProjectsSection;
