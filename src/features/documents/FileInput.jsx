import { useUploadDocument } from "./useUploadDocument";
import { PlusIcon } from "@heroicons/react/24/outline";

function FileInput() {
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <label
      htmlFor="file"
      className="ms-auto w-min h-min rounded-md p-2 flex flex-col items-center justify-center text-textColorLight hover:bg-bgColorDark text-sm transition-colors cursor-pointer"
    >
      <PlusIcon className="h-5 w-5" />

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
  );
}

export default FileInput;
