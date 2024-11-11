import {
  SVGaws,
  SVGJavaScript,
  SVGnodejs,
  SVGReact,
  SVGredux,
  SVGsql,
  SVGTailwind,
  SVGTypeScript,
} from "../../icons/IconsSVG";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.section_main}>
      <section className={styles.info_container}>
        <h1 className="  text-center pb-5">Acerca de mi</h1>
        <p>
          Me apasiona la programación y tengo experiencia trabajando tanto de
          manera autónoma como en equipo. Disfruto compartir mis conocimientos y
          recibir feedback, ya que considero que es una excelente manera de
          aprender y mejorar juntos.
        </p>
        <br />
        <p>
          Me centro en desarrollar mis habilidades en el Front-End, pero también
          me interesa conocer los fundamentos de otras áreas del desarrollo.
          Actualmente, estoy participando en un Bootcamp de AWS con Generation
          Chile y trabajando en nuevos proyectos para seguir ampliando mis
          conocimientos y habilidades en esta área.
        </p>
        <br />
        <p>
          Fuera del ámbito laboral, me encanta el deporte y he tenido el honor
          de formar parte del equipo universitario de la Universidad Federico
          Santa María.
        </p>
      </section>

      <div className={styles.stack_container}>
        <section>
          <h4 className=" mb-3">Stack Principal:</h4>
          <section className={styles.stack}>
            <SVGJavaScript />
            <SVGTypeScript />
            <SVGReact />
            <SVGredux />
            <SVGsql />
            <SVGTailwind />
          </section>
        </section>

        <section>
          <h4 className=" mb-2">En practica:</h4>
          <section className={styles.stack}>
            <SVGaws />
            <SVGnodejs />
          </section>
        </section>
      </div>
    </div>
  );
}
export default About;
