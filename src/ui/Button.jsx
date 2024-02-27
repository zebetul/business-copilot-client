import PropTypes from "prop-types";

function Button({ children, onClick, type, disabled, className }) {
  return (
    <button
      className={`flex flex-col items-center justify-center text-nowrap rounded-md bg-bgColorDark p-2 text-sm text-textColorLight transition-colors duration-300 hover:text-textColor ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
