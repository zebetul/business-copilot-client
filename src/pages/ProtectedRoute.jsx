import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

import useUser from "../features/authentication/useUser";
import Loading from "../ui/Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !isLoading) return navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  // 3. Render Loading if loading
  if (isLoading) return <Loading />;

  // 4. Render the children if authenticated
  if (isAuthenticated) return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
