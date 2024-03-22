import PropTypes from "prop-types";

function Header2({ children }) {
  return <h2 className="mb-20 font-bold text-textColorLight">{children}</h2>;
}

Header2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header2;
