// import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import useCompanyData from "./useCompanyData";

function CompanyForm() {
  // const { register, formState, handleSubmit } = useForm();
  const { companyData: { title, caen, eurostat } = {}, isLoading } =
    useCompanyData();
  // const { saveCompanyData, isSaving } = useSaveCompanyData();

  return (
    <form>
      <Input
        name="title"
        type="text"
        label="Nume"
        defaultValue={title}
        disabled={isLoading}
      />

      <Input
        name="caen"
        type="number"
        label="CAEN"
        defaultValue={caen}
        disabled={isLoading}
      />

      <Input
        name="eurostat"
        type="text"
        label="EUROSTAT query url"
        defaultValue={eurostat}
        disabled={isLoading}
      />
    </form>
  );
}

export default CompanyForm;
