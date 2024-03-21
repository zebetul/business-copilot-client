import PropTypes from "prop-types";

function Button({ children, onClick, disabled, className }) {
  return (
    <button
      className={`hover:bg-bgColorHighlight flex flex-col items-center justify-center text-nowrap rounded-md bg-bgColorDark p-2 text-sm text-textColorLight transition-colors duration-300 hover:text-textColor ${className}`}
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
