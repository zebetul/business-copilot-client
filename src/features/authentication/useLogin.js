import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiLogin } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (user) => {
      // Store the user in the cache
      queryClient.setQueryData(["user"], user.user);

      // Redirect to the assistant page and replace the current history entry
      navigate("/company", { replace: true });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  return { isPending, login };
}

export default useLogin;
