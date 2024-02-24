import { useQuery } from "@tanstack/react-query";
import { apiGetCurrentUser } from "../../services/apiAuthentication";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}

export default useUser;
