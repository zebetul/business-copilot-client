import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

import Section from "../ui/Section";

import CompanyForm from "../features/company/CompanyForm";
import PageHeader from "../ui/PageHeader";

import SelectCompany from "../features/company/SelectCompany";
import { useCompany } from "../contexts/CompanyContext";
import NoCompanySelected from "../ui/NoCompanySelected";
import AddCompany from "../features/company/AddCompany";

function Company() {
  const { currentCompany } = useCompany();

  return (
    <Section>
      <PageHeader>
        <PageHeader.Title>
          <BuildingOfficeIcon className="h-8 w-8 text-accentColor" />

          <span>Company</span>
        </PageHeader.Title>

        <PageHeader.Buttons>
          <SelectCompany />

          <AddCompany />
        </PageHeader.Buttons>
      </PageHeader>

      {currentCompany ? (
        <CompanyForm companyId={currentCompany.id} />
      ) : (
        <NoCompanySelected />
      )}
    </Section>
  );
}

export default Company;
