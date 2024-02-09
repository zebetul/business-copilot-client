import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUploadDocument } from "../../services/apiDocuments";

export function useUploadDocument() {
  const queryClient = useQueryClient();

  const { isLoading: isUploading, mutate: uploadDocument } = useMutation({
    mutationFn: apiUploadDocument,
    onSuccess: () => {
      alert("File uploaded successfully");

      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return { isUploading, uploadDocument };
}
