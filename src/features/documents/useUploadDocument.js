import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUploadDocument } from "../../services/apiDocuments";
import toast from "react-hot-toast";

export function useUploadDocument() {
  const queryClient = useQueryClient();

  const { isPending: isUploading, mutate: uploadDocument } = useMutation({
    mutationFn: apiUploadDocument,
    onSuccess: () => {
      toast.success("File uploaded successfully");

      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isUploading, uploadDocument };
}
