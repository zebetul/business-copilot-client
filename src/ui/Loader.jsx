import PropTypes from "prop-types";

function Loader({ size = "medium" }) {
  const className = {
    small: "w-10",
    medium: "w-16",
  };

  return (
    <div className="flex h-5 items-center">
      <div className={`loader ${className[size]}`}></div>
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
