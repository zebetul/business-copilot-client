import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CustomNavLink({ children, className, to }) {
	return (
		<NavLink
			to={to}
			className={`flex items-center gap-2 rounded-md hover:bg-bgColorDark transition-colors duration-300 text-nowrap ${className}`}
		>
			{children}
		</NavLink>
	);
}

CustomNavLink.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	to: PropTypes.string.isRequired,
};

export default CustomNavLink;
