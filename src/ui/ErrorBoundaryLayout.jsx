import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

function ErrorBoundaryLayout({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      {children}
    </ErrorBoundary>
  );
}

ErrorBoundaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundaryLayout;
