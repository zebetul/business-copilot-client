import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";
import Section from "../ui/Section";
import PageHeader from "../ui/PageHeader";
import UploadDocument from "../features/documents/UploadDocument";

function Documents() {
  return (
    <Section>
      <PageHeader>
        <PageHeader.Title>
          <ClipboardDocumentListIcon className="my-auto h-8 w-8 text-accentColor" />

          <span>Documents</span>
        </PageHeader.Title>

        <PageHeader.Buttons>
          <UploadDocument />
        </PageHeader.Buttons>
      </PageHeader>

      <DocumentsTable />
    </Section>
  );
}

export default Documents;
