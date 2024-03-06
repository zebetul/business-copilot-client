import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteDocument } from "../../services/apiDocuments";

export function useDeleteDocument() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteDocument } = useMutation({
    mutationFn: apiDeleteDocument,

    onSuccess: () => {
      alert("File deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },

    onError: (error) => alert(error.message),
  });

  return { isDeleting, deleteDocument };
}
