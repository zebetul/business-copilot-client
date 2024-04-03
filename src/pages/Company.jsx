import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

import Section from "../ui/Section";

import CompanyForm from "../features/company/CompanyForm";
import PageHeader from "../ui/PageHeader";

function Company() {
  return (
    <Section>
      <PageHeader>
        <PageHeader.Title>
          <BuildingOfficeIcon className="my-auto h-8 w-8 text-accentColor" />

          <span>Company</span>
        </PageHeader.Title>
      </PageHeader>

      <CompanyForm />
    </Section>
  );
}

export default Company;
