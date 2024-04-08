import { useEffect } from "react";

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

  // Adding a default "Select company" option
  options?.unshift({ label: "Select company", value: "" });

  // Set the first company as the current company when the companies are fetched
  // useEffect(() => {
  //   if (options?.length && !currentCompany) {
  //     setCurrentCompany(options[0]);
  //   }

  // options are not needed in the dependency array given that they are derived from companies every time the companies are fetched and the component is re-rendered
  // eslint-disable-next-line
  // }, [currentCompany, setCurrentCompany]);

  const onSelectCompany = (event) => {
    const company = options.find(
      (option) => option.value === +event.target.value,
    );

    setCurrentCompany(company);
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
      value={currentCompany?.value}
      onChange={onSelectCompany}
      disabled={isLoading}
    />
  );
}

export default SelectCompany;
