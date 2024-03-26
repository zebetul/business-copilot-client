import PropTypes from "prop-types";

function ButtonIcon({
  children,
  onClick,
  disabled,
  className,
  type = "primary",
}) {
  const baseStyles =
    "rounded-md flex text-textColorLight transition-colors duration-300";

  const styles = {
    primary:
      baseStyles + " w-min p-2 hover:bg-bgColorDark hover:text-textColor",
    withText:
      baseStyles + " flex items-center text-sm p-2 hover:bg-bgColorDark gap-2",
    withoutBg: baseStyles + " w-min hover:text-textColor",
  };

  return (
    <button
      className={`${styles[type]} ${className}`}
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
  type: PropTypes.oneOf(["primary", "withoutBg", "withText"]),
};

export default ButtonIcon;
