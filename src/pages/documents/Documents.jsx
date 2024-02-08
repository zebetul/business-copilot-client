import { useLoaderData } from "react-router-dom";
import {
  getDocuments,
  uploadDocument,
} from "../../services/apiBusinessCopilot";

function Documents() {
  const documents = useLoaderData();

  console.log(documents);

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
      <h1>Internal Documents</h1>

      <input
        className="document_upload_button"
        name="file"
        id="file"
        type="file"
        aria-label="File browser"
        // multiple
        onChange={(event) => handleDocumentUpload(event)}
      />
    </>
  );
}

export async function loader() {
  // const documents = await getDocuments();
  // return documents;

  return "This is a placeholder for the documents.";
}

export default Documents;
