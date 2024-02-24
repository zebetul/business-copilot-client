import PropTypes from "prop-types";

function ButtonIcon({ children, onClick, disabled, className }) {
  return (
    <button
      className={`w-min h-min rounded-md p-2 flex flex-col items-center justify-center text-textColorLight hover:bg-bgColorDark text-sm transition-colors ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default ButtonIcon;
