import PropTypes from "prop-types";

export function ButtonStyled({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className=" w-max h-max  bg-purple-600 text-white px-5 py-2 rounded-lg"
    >
      {children}
    </button>
  );
}

ButtonStyled.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
