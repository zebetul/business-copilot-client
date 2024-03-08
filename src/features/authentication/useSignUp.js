import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiSignUp } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  return { signUp, isPending };
}

export default useSignUp;
