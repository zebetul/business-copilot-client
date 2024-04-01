import Input from "../../ui/Input";
import useCompanyData from "./useCompanyData";
import useUpdateCompanyData from "./useUpdateCompanyData";
import Loading from "../../ui/Loading";
import Select from "../../ui/Select";
import { ARII_GEOGRAFICE } from "../../config/constants";

function CompanyForm() {
  const { companyData = {}, isLoading } = useCompanyData();
  const { title, caen, eurostat, piataTinta, ariaGeografica, prccode } =
    companyData;

  const { updateCompanyData, isUpdating } = useUpdateCompanyData();

  function handleUpdate(event, field) {
    const newValue = event.target.value;

    if (
      !newValue ||
      newValue === companyData[field] ||
      // Needed for the caen field, as it's a number
      +newValue === companyData[field]
    )
      return console.log("Invalid input", newValue);

    updateCompanyData({ [field]: newValue });
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Input
        name="title"
        type="text"
        label="Nume"
        defaultValue={title}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "title")}
      />

      <Input
        name="caen"
        type="number"
        label="CAEN"
        defaultValue={caen}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "caen")}
      />

      <Input
        name="eurostat"
        type="text"
        label="EUROSTAT query url"
        defaultValue={eurostat}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "eurostat")}
      />

      <Input
        name="piataTinta"
        type="text"
        label="Piata tinta"
        defaultValue={piataTinta}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "piataTinta")}
      />

      <Select
        name="ariaGeografica"
        label="Aria geografica de acoperire a pietei tinta"
        options={ARII_GEOGRAFICE}
        defaultValue={ariaGeografica}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "ariaGeografica")}
      />

      <Input
        name="prccode"
        type="text"
        label="prccode"
        defaultValue={prccode}
        disabled={isUpdating}
        onBlur={(event) => handleUpdate(event, "prccode")}
      />
    </form>
  );
}

export default CompanyForm;
