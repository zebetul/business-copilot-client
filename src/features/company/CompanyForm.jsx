import PropTypes from "prop-types";

import useCompanyData from "./useCompany";
import useUpdateCompany from "./useUpdateCompany";

import { ARII_GEOGRAFICE } from "../../config/constants";
import Input from "../../ui/Input";
import Loading from "../../ui/Loading";
import Select from "../../ui/Select";

function CompanyForm({ companyId }) {
  const { company = {}, isLoading, error } = useCompanyData(companyId);
  const { title, cui, piataTinta, ariaGeografica, caen, prccode } = company;
  const { updateCompany, isUpdating } = useUpdateCompany();

  function handleUpdate(event, field) {
    const newValue = event.target.value;

    if (
      !newValue ||
      newValue === company[field] ||
      // Needed for the caen field, as it is a number
      +newValue === company[field]
    )
      return;

    updateCompany({ [field]: newValue, id: company.id });
  }

  if (isLoading) return <Loading />;

  if (error) return <p>Ups! A aparut o eroare. Incearca din nou.</p>;

  return (
    <>
      <h2 className="mb-10 text-2xl">{title}</h2>

      <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          name="cui"
          type="text"
          label="CUI"
          defaultValue={cui || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "cui")}
          key={cui}
        />

        <Input
          name="piataTinta"
          type="text"
          label="Piata tinta"
          defaultValue={piataTinta || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "piataTinta")}
          key={piataTinta}
        />

        <Select
          name="ariaGeografica"
          label="Aria geografica de acoperire a pietei tinta"
          options={ARII_GEOGRAFICE}
          value={ariaGeografica || ""}
          disabled={isUpdating}
          onChange={(event) => handleUpdate(event, "ariaGeografica")}
          className="p-2.5"
        />

        <Input
          name="caen"
          type="number"
          label="CAEN"
          defaultValue={caen || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "caen")}
          key={caen}
        />

        <Input
          name="prccode"
          type="text"
          label="PRODCOM"
          defaultValue={prccode || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "prccode")}
          key={prccode}
        />
      </form>
    </>
  );
}

CompanyForm.propTypes = {
  companyId: PropTypes.number,
};

export default CompanyForm;
