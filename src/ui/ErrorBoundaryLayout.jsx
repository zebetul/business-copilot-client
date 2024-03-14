import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { Outlet } from "react-router-dom";

function ErrorBoundaryLayout() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <Outlet />
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLayout;
