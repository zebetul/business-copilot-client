import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteDocument } from "../../services/apiDocuments";
import toast from "react-hot-toast";

export function useDeleteDocument() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteDocument } = useMutation({
    mutationFn: apiDeleteDocument,

    onSuccess: () => {
      toast.success("File deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },

    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteDocument };
}
