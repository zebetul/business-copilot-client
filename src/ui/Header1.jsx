import PropTypes from "prop-types";

function Header1({ children }) {
  return (
    <h1 className="mx-auto mb-20 mt-10 flex max-w-3xl gap-2 text-4xl">
      {children}
    </h1>
  );
}

Header1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header1;
