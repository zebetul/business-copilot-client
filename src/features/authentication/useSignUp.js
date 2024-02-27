import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ userName, email, password }) =>
      apiSignUp({ userName, email, password }),
    onSuccess: (user) => {
      // Store the user in the cache
      queryClient.setQueryData(["user"], user.user);

      // Redirect to the assistant page and replace the current history entry
      navigate("/assistant", { replace: true });
    },
  });

  return { signUp, isPending };
}

export default useSignUp;
