import PropTypes from "prop-types";
import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-2 text-3xl">Something went wrong. 🤨</h1>

      <pre className="mb-5">{error?.message || error}</pre>

      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
