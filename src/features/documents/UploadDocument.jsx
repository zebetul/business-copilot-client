import PropTypes from "prop-types";
import FileInput from "../../ui/FileInput";
import { useUploadDocument } from "./useUploadDocument";

function UploadDocument({ children, className }) {
  const { isUploading, uploadDocument } = useUploadDocument();

  return (
    <FileInput
      onChange={uploadDocument}
      disabled={isUploading}
      className={className}
    >
      {children}
    </FileInput>
  );
}

UploadDocument.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default UploadDocument;
