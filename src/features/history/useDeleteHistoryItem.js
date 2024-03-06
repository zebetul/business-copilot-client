import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteHistoryItem } from "../../services/apiHistory";
import { useNavigate } from "react-router-dom";

function useDeleteHistoryItem() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: apiDeleteHistoryItem,

    onSuccess: () => {
      alert("Item deleted successfully");

      queryClient.invalidateQueries({ queryKey: ["history"] });

      // Redirect to the history page
      navigate("/history", { replace: true });
    },

    onError: (error) => alert(error),
  });

  return { isDeleting, deleteItem };
}

export default useDeleteHistoryItem;
