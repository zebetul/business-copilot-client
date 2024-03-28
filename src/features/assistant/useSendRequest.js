import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSendRequest } from "../../services/apiAssistant";
import toast from "react-hot-toast";

function useSendRequest() {
  const queryClient = useQueryClient();

  const {
    isPending: isSending,
    mutate: sendRequest,
    data,
  } = useMutation({
    mutationFn: apiSendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["history"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return { isSending, sendRequest, data };
}

export default useSendRequest;
