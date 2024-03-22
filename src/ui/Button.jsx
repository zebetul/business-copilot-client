import PropTypes from "prop-types";

function Button({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
}) {
  const types = {
    primary: `bg-bgColorDark text-textColor ${disabled ? "opacity-50" : "hover:bg-bgColorHighlight"}`,
    // secondary: "bg-bgColor",
    accent: `bg-accentColor text-bgColor ${disabled ? "opacity-50" : "hover:bg-accentColorLight"}`,
    // danger: "bg-dangerColor",
  };

  return (
    <button
      className={`flex flex-col items-center justify-center text-nowrap rounded-md p-2 text-sm transition-colors duration-300 ${types[variant]} ${className}`}
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
  variant: PropTypes.oneOf(["primary", "secondary", "accent", "danger"]),
};

export default Button;
