import PropTypes from "prop-types";

function Header1({ children }) {
  return <h1 className="mx-auto mt-10 flex gap-3 text-4xl">{children}</h1>;
}

Header1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header1;
