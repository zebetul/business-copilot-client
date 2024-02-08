import { uploadDocument } from "../../services/apiDocuments";
import DocumentsTable from "../../ui/DocumentsTable";

function Documents() {
  const handleDocumentUpload = async (event) => {
    const file = event.target.files[0];

    // Data validation
    if (!file) return console.log("No file selected.");

    try {
      // Send file to backend
      const response = await uploadDocument(file);

      console.log(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="mb-10 font-semibold">Processed Documents</h1>

      <input
        className="document_upload_button mb-10"
        name="file"
        id="file"
        type="file"
        aria-label="File browser"
        onChange={(event) => handleDocumentUpload(event)}
      />

      <DocumentsTable />
    </>
  );
}

export default Documents;
