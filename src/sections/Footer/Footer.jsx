import { SVGgithub, SVGgmail, SVGLinkedin } from "../../icons/IconsSVG";

function Footer() {
  return (
    <div className=" w-screen bg-slate-800 h-max py-3 px-0 justify-center flex flex-col items-center">
      <section className=" gap-4 h-16 flex  items-center justify-center">
        <a href="" className=" w-10 h-max">
          <SVGgmail />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-antilef/"
          className=" w-10 h-max"
          target="_blank"
        >
          <SVGLinkedin />
        </a>
        <a
          href="https://github.com/Matias-Antilef"
          className=" w-10 h-max"
          target="_blank"
        >
          <SVGgithub />
        </a>
      </section>
    </div>
  );
}
export default Footer;
