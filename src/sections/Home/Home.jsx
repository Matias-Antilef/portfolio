import styles from "./home.module.css";
import { SVGgithub, SVGLinkedin } from "../../icons/IconsSVG";

function Home() {
  return (
    <div className={styles.section_main}>
      <section>
        <label className="text-white text-xl">Hola, soy</label>{" "}
        <h3 className=""> Matias Antilef</h3>
        <h2 className=" mb-4">Desarrollador Front End</h2>
      </section>
      <p>
        Me enfoco en desarrollar aplicaciones web rápidas y eficientes con
        React, JavaScript y TypeScript, siempre buscando optimizar el
        rendimiento y la escalabilidad del código.
      </p>

      <section className={styles.buttons}>
        <button onClick={() => {}} className=" ">
          CV
        </button>
        <a href="https://github.com/Matias-Antilef" target="_blank">
          <SVGgithub />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-antilef/"
          className=""
          target="_blank"
        >
          <SVGLinkedin />
        </a>
      </section>
    </div>
  );
}
export default Home;
