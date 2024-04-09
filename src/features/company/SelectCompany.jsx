import { useCompany } from "../../contexts/CompanyContext";
import useCompanies from "./useCompanies";

import Select from "../../ui/Select";
import Loader from "../../ui/Loader";

function SelectCompany() {
  const { companies, isLoading, error } = useCompanies();
  const { currentCompany, setCurrentCompany } = useCompany();

  const options = companies?.map((company) => ({
    label: company.title,
    value: company.id,
  }));
  // Add a default "Select company" option
  options?.unshift({ label: "Select company", value: "" });

  const onSelectCompany = (event) => {
    const company = options.find(
      (option) => option.value === +event.target.value,
    );

    setCurrentCompany(
      company
        ? {
            title: company?.label,
            id: company?.value,
          }
        : null,
    );
  };

  if (isLoading) {
    return <Loader size="small" />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <Select
      name="title"
      className="p-2 text-sm"
      options={options}
      value={currentCompany?.id}
      onChange={onSelectCompany}
      disabled={isLoading}
    />
  );
}

export default SelectCompany;
