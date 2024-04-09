import { BuildingOfficeIcon, PlusIcon } from "@heroicons/react/24/outline";

import Section from "../ui/Section";

import CompanyForm from "../features/company/CompanyForm";
import PageHeader from "../ui/PageHeader";
import Button from "../ui/Button";

import SelectCompany from "../features/company/SelectCompany";
import { useCompany } from "../contexts/CompanyContext";
import NoCompanySelected from "../ui/NoCompanySelected";

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

          <Button size="sm" variant="accent">
            <PlusIcon className="h-4 w-4" />

            <span className="">Add company</span>
          </Button>
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
