import styles from "./hero-section.module.css";
import LinkStyled from "../ui/LinkStyled/LinkStyled";

function HeroSection() {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_navbar}>
          <div className={styles.avatar_container}>
            <img src="/a.png" alt="" />
            <div className={styles.header_navbar}>
              <p>Desarrollador front end</p>
              <p>Matías Antilef</p>
            </div>
          </div>
          <div className={styles.utils_container}>
            <p>Hola</p>
          </div>
        </div>
        <section className={styles.header_container}>
          <h1>Desarrollador front end</h1>
          <h3>Web | UI&UX | Mobile</h3>
        </section>
        <section className={styles.links_container}>
          <LinkStyled to={"#"}>Ver proyectos</LinkStyled>
          <LinkStyled to={"#"}>Descargar CV</LinkStyled>
        </section>
      </div>
    </>
  );
}
export default HeroSection;
