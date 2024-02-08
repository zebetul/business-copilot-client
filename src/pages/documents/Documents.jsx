import { useLoaderData } from "react-router-dom";
import { getDocuments, uploadDocument } from "../../services/apiDocuments";
import DocumentRow from "../../ui/DocumentRow";

function Documents() {
  // const documents = useLoaderData();
  const documents = [
    {
      id: 1,
      title: "Document 1",
      description: "This is the first document.",
      type: "pdf",
    },
    {
      id: 2,
      title: "Document 2",
      description: "This is the second document.",
      type: "pdf",
    },
  ];

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
      <h1 className="mb-10 font-semibold">Processed Documents</h1>

      <input
        className="document_upload_button mb-10"
        name="file"
        id="file"
        type="file"
        aria-label="File browser"
        onChange={(event) => handleDocumentUpload(event)}
      />

      <div className="documents_container flex flex-col gap-5">
        {documents.map((document) => (
          <DocumentRow key={document.id} document={document} />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  // const documents = await getDocuments();
  // return documents;

  return "This is a placeholder for the documents.";
}

export default Documents;
