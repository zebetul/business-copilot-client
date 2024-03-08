import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteHistoryItem } from "../../services/apiHistory";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useDeleteHistoryItem() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: apiDeleteHistoryItem,

    onSuccess: () => {
      toast.success("Record deleted successfully");

      queryClient.invalidateQueries({ queryKey: ["history"] });

      // Redirect to the history page
      navigate("/history", { replace: true });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteItem };
}

export default useDeleteHistoryItem;
