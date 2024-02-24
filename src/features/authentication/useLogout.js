import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiLogout } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { logout, isPending };
}

export default useLogout;
