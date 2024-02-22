import PropTypes from "prop-types";

function Button({ children, onClick, type, disabled, className }) {
  return (
    <button
      className={`w-min border border-bgColorDark rounded-md p-2 flex flex-col items-center justify-center text-textColorLight hover:text-textColor text-sm transition-colors text-nowrap ${className}`}
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
