import PropTypes from "prop-types";

function Button({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
  size = "md",
}) {
  const baseStyles =
    "flex items-center h-min justify-center gap-2 text-nowrap rounded-md transition-colors duration-300";

  const types = {
    primary: `bg-bgColorDark text-textColor ${disabled ? "opacity-30" : "hover:bg-bgColorHighlight"}`,
    // secondary: "bg-bgColor",
    accent: `bg-accentColor text-bgColor ${disabled ? "opacity-30" : "hover:bg-accentColorLight"}`,
    // danger: "bg-dangerColor",
  };

  const sizeOptions = {
    sm: "py-2 px-2 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${types[variant]} ${sizeOptions[size]} ${className}`}
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
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
