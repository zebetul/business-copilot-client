import PropTypes from "prop-types";
import { useUploadDocument } from "./useUploadDocument";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useCompany } from "../../contexts/CompanyContext";

function UploadDocument({ className }) {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <label
      htmlFor="file"
      className={`flex h-min w-min cursor-pointer items-center justify-center gap-1 rounded-md bg-accentColor p-2 text-sm text-bgColorLight transition-colors hover:bg-accentColorLight ${className}`}
    >
      <PlusIcon className="h-4 w-4" />

      <span className="text-nowrap text-xs">Add document</span>

      <input
        className="sr-only"
        name="file"
        id="file"
        type="file"
        aria-label="File browser"
        disabled={isUploading}
        onChange={(event) =>
          uploadDocument({ file: event.target.files[0], companyId })
        }
      />
    </label>
  );
}

UploadDocument.propTypes = {
  className: PropTypes.string,
};

export default UploadDocument;
