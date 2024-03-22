import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

import Header1 from "../ui/Header1";
import Section from "../ui/Section";

import CompanyForm from "../features/company/CompanyForm";
import Header2 from "../ui/Header2";

function Company() {
  return (
    <Section>
      <Header1>
        <BuildingOfficeIcon className="my-auto h-8 w-8 text-accentColor" />

        <span>Company</span>
      </Header1>

      <Header2>Add company details</Header2>

      <CompanyForm />
    </Section>
  );
}

export default Company;
