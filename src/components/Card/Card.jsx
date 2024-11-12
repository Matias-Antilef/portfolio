import styles from "./card.module.css";
import {
  SVGCSS,
  SVGgithub,
  SVGHTML,
  SVGJavaScript,
  SVGReact,
  SVGTailwind,
} from "../../icons/IconsSVG";
import PropTypes from "prop-types";
import { LinkStyled } from "../ui";

function Card({ data }) {
  return (
    <div
      className={styles.section_main}
      style={{ backgroundImage: `url(${data.imageMain})` }}
    >
      <section className={styles.infobg}>
        <section className={styles.section_info}>
          <ul className={styles.tecnos}>
            {data &&
              data.tecnologies.map((tecno, index) => (
                <li key={index}>
                  {(() => {
                    switch (tecno) {
                      case "SVGHTML":
                        return <SVGHTML />;
                      case "SVGCSS":
                        return <SVGCSS />;
                      case "SVGTailwind":
                        return <SVGTailwind />;
                      case "SVGJavaScript":
                        return <SVGJavaScript />;
                      case "SVGReact":
                        return <SVGReact />;
                      default:
                        return null;
                    }
                  })()}
                </li>
              ))}
          </ul>
          <section className={styles.nose}>
            <h4> {data.title} </h4>
            <p> {data.description} </p>
          </section>
        </section>

        <section className={styles.buttons}>
          <LinkStyled linkRef={data.url_proyect}>Ir al proyecto</LinkStyled>
          <section className=" absolute top-0 right-0 flex gap-5 p-5  rounded-xl ">
            <a
              href={data.url_github}
              className="w-[3rem] h-[3rem]"
              target="_blank"
            >
              <SVGgithub />
            </a>
          </section>
        </section>
      </section>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tecnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageMain: PropTypes.string.isRequired,
    url_github: PropTypes.string.isRequired,
    url_proyect: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
