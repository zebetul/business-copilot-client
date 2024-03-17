import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CustomNavLink({ children, className, to, type }) {
  const baseStyles =
    "flex items-center gap-2 rounded-md hover:bg-bgColorDark transition-colors duration-300 text-nowrap";

  const styles = {
    primary: baseStyles + " py-2 px-3",
    small: baseStyles + " py-1 px-2 text-xs font-normal",
  };

  return (
    <NavLink to={to} className={`${styles[type]} ${className}`} end>
      {children}
    </NavLink>
  );
}

CustomNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "small"]),
};

export default CustomNavLink;
