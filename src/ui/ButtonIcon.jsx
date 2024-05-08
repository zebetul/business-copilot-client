import PropTypes from "prop-types";

function ButtonIcon({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
}) {
  const baseStyles = "rounded-md flex transition-colors duration-300";

  const styles = {
    primary:
      baseStyles +
      " text-textColorLight w-min p-2 hover:bg-bgColorDark hover:text-textColor",
    withText:
      baseStyles +
      " text-textColorLight flex items-center text-xs p-2 hover:bg-bgColorDark gap-2 hover:text-textColor",
    withoutBg: baseStyles + " text-textColorLight w-min hover:text-textColor",
    accent:
      baseStyles + " text-accentColorLight w-min p-2 hover:text-accentColor",
  };

  return (
    <button
      className={`${styles[variant]} ${className}`}
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
  variant: PropTypes.oneOf(["primary", "withoutBg", "withText", "accent"]),
};

export default ButtonIcon;
