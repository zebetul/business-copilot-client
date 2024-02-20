import { useUploadDocument } from "./useUploadDocument";
import { PlusIcon } from "@heroicons/react/24/outline";

function FileInput() {
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <label
      htmlFor="file"
      className="w-min h-min ms-auto border border-bgColorDark rounded-md p-1 flex flex-row gap-2 items-center justify-center text-textColorLight hover:text-textColor text-sm transition-colors text-nowrap cursor-pointer"
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
