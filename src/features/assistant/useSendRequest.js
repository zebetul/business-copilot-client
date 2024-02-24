import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSendRequest } from "../../services/apiAssistant";

function useSendRequest() {
  const queryClient = useQueryClient();

  const {
    isPending: isSending,
    mutate: sendRequest,
    data: assistantResponse,
  } = useMutation({
    mutationFn: apiSendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["history"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isSending, sendRequest, assistantResponse };
}

export default useSendRequest;
