import { useUploadDocument } from "./useUploadDocument";

function FileInput() {
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <input
      className="document_upload_button mb-10"
      name="file"
      id="file"
      type="file"
      aria-label="File browser"
      onChange={(event) => uploadDocument(event.target.files[0])}
      disabled={isUploading}
    />
  );
}

export default FileInput;
