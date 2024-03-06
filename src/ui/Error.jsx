import PropTypes from "prop-types";

function Error({ error }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-2 text-3xl">Something went wrong. 🤨</h1>

      <pre className="mb-5">{error?.message || error}</pre>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
