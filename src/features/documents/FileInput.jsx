import { useUploadDocument } from "./useUploadDocument";
import { PlusIcon } from "@heroicons/react/24/outline";

function FileInput() {
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <div className="file_input-container relative ml-auto">
      <label
        htmlFor="file"
        className="absolute top-0 right-0 h-full cursor-pointer flex gap-2 border rounded-md px-4 py-3 items-center justify-center hover:bg-bgColor transition-colors"
      >
        <PlusIcon className="h-5 w-5" />

        <span className="text-sm">Insert</span>

        <input
          className="sr-only"
          name="file"
          id="file"
          type="file"
          aria-label="File browser"
          onChange={(event) => uploadDocument(event.target.files[0])}
          disabled={isUploading}
        />
      </label>
    </div>
  );
}

export default FileInput;
