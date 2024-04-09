import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";
import Section from "../ui/Section";
import PageHeader from "../ui/PageHeader";
import UploadDocument from "../features/documents/UploadDocument";
import { useCompany } from "../contexts/CompanyContext";
import NoCompanySelected from "../ui/NoCompanySelected";

function Documents() {
  const { currentCompany } = useCompany();

  return (
    <Section>
      <PageHeader>
        <PageHeader.Title>
          <ClipboardDocumentListIcon className="h-8 w-8 text-accentColor" />

          <span>Documents</span>
        </PageHeader.Title>

        {currentCompany ? (
          <PageHeader.Buttons>
            <UploadDocument />
          </PageHeader.Buttons>
        ) : null}
      </PageHeader>

      {currentCompany ? (
        <DocumentsTable companyId={currentCompany.id} />
      ) : (
        <NoCompanySelected />
      )}
    </Section>
  );
}

export default Documents;
