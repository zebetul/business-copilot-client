import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiSendRequest } from "../../services/apiAssistant";

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
