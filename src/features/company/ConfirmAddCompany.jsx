import { useState } from "react";
import PropTypes from "prop-types";

import { useCompany } from "../../contexts/CompanyContext";
import useAddCompany from "./useAddCompany";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import Button from "../../ui/Button";

function ConfirmAddCompany({ onCloseModal }) {
  const [cui, setCui] = useState("");
  const { addCompany, isPending } = useAddCompany();
  const { setCurrentCompany } = useCompany();

  const onAddCompany = async () => {
    addCompany(cui, {
      onSuccess: (newCompany) => {
        setCui("");
        onCloseModal();
        setCurrentCompany(newCompany);
      },
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="m-2 text-lg">Import company data from ANAF</h2>

      <Input
        name="cui"
        type="text"
        label="CUI"
        required
        placeholder="ex: 12345678"
        value={cui}
        onChange={(e) => setCui(e.target.value)}
      />

      <Button variant="accent" onClick={onAddCompany}>
        {isPending ? <Loader size="small" /> : "Import"}
      </Button>
    </div>
  );
}

ConfirmAddCompany.propTypes = {
  onCloseModal: PropTypes.func,
};

export default ConfirmAddCompany;
