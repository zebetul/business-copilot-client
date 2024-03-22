import PropTypes from "prop-types";

function Button({ children, onClick, disabled, className }) {
  return (
    <button
      className={`flex flex-col items-center justify-center text-nowrap rounded-md bg-bgColorDark p-2 text-sm text-textColor transition-colors duration-300 ${disabled ? "opacity-50" : "hover:bg-bgColorHighlight"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
