import PropTypes from "prop-types";

import LogoDark from "../assets/logo_dark.svg";
import LogoLight from "../assets/logo_light.svg";
import { useDarkMode } from "../context/DarkModeContext";

function Logo({ size = "small" }) {
  const { isDarkMode } = useDarkMode();

  const type = {
    small: "w-32",
    large: "w-60",
  };

  return (
    <img
      src={isDarkMode ? LogoDark : LogoLight}
      alt="Logo"
      className={`mx-auto ${type[size]}`}
    />
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
};

export default Logo;
