import PropTypes from "prop-types";

export function LinkStyled({ children, linkRef }) {
  return (
    <a
      href={linkRef}
      className=" bg-purple-600 text-white font-semibold text-xl px-5 py-2 rounded-lg"
      target="_blank"
    >
      {children}
    </a>
  );
}

LinkStyled.propTypes = {
  linkRef: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default LinkStyled;
