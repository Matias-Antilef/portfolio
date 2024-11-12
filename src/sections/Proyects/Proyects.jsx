import Card from "../../components/Card/Card";
import styles from "./proyects.module.css";
import data from "../../data.json";

function Proyects() {
  return (
    <div className={styles.section_main}>
      <h1>Proyectos</h1>
      <Card data={data[0]} />
    </div>
  );
}
export default Proyects;
