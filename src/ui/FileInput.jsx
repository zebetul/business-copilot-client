import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "../services/apiDocuments";

function FileInput() {
  const queryClient = useQueryClient();

  const { isLoading: isUploading, mutate } = useMutation({
    mutationFn: uploadDocument,
    onSuccess: () => {
      alert("File uploaded successfully");

      queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
    onError: (error) => alert(error.message),
  });

  return (
    <input
      className="document_upload_button mb-10"
      name="file"
      id="file"
      type="file"
      aria-label="File browser"
      onChange={(event) => mutate(event.target.files[0])}
      disabled={isUploading}
    />
  );
}

export default FileInput;
