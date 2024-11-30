import { Link, useParams } from "react-router-dom";
import styles from "./project-info.module.css";
import { useEffect, useState } from "react";
import { PublicRoutes } from "../../routes/routes";

function ProjectInfo() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/data_info.json")
      .then((res) => res.json())
      .then((res) => {
        const filter = res.find((project) => project.id === parseInt(id));
        setData(filter);
      });
  }, [id]);

  return (
    <div className={styles.proyect_container}>
      <div className={styles.carousel_container}>
        {data &&
          data.carousel_img.map((res) => (
            <img key={res.id} src={res.url} alt="imagen-proyecto" />
          ))}
      </div>
      <div className={styles.links_container}>
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
      </div>
      <div className={styles.description_container}>
        <section className={styles.resume_container}>
          <div className={styles.resume_header}>
            <h2>Proyecto {data && data.title} </h2>
            <p> {data && data.resume} </p>
          </div>
          <div className={styles.resume_achievements}>
            <div className={styles.list_achievements}>
              <ul>
                {data &&
                  data.achievements?.map((achievement, index) => (
                    <li key={index}>✅ {achievement}</li>
                  ))}
              </ul>
            </div>
            <div className={styles.list_stack}>
              <h5>Aplicación web ful stack</h5>
              <ul>
                {data &&
                  data.stack?.map((stack, index) => (
                    <li key={index}>
                      <img
                        src={`/svg/${stack.toLowerCase()}.svg`}
                        alt={`${stack} icon`}
                        className="object-cover"
                      />
                      {stack}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.sections_container}>
          {data &&
            data.sections.map((res) => (
              <section key={res.id} className={styles.section}>
                <h5> {res.sub_title} </h5>
                <ul>
                  {res.content.map((cont) => (
                    <li key={cont.id}>
                      <b> {cont.strong}: </b>
                      {cont.text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectInfo;
