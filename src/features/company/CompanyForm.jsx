import PropTypes from "prop-types";

import useCompanyData from "./useCompany";
import useUpdateCompany from "./useUpdateCompany";

import { ARII_GEOGRAFICE, CLIENTI_TINTA } from "../../config/constants";
import Input from "../../ui/Input";
import Loading from "../../ui/Loading";
import Select from "../../ui/Select";
import Error from "../../ui/Error";
import CompanyTitle from "./CompanyTitle";

function CompanyForm({ companyId }) {
  const { company = {}, isLoading, error } = useCompanyData(companyId);
  const {
    title,
    cui,
    piataTinta,
    ariaGeografica,
    caen,
    caenDescription,
    prccode,
    adress,
    nrRegCom,
    clientiTinta,
    produsulServiciul,
    dataInfiintare,
    formaJuridica,
    platitorTVA,
  } = company;
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

  if (error) return <Error error={error} />;

  return (
    <>
      <CompanyTitle
        title={title}
        cui={cui}
        platitorTVA={platitorTVA}
        nrRegCom={nrRegCom}
        dataInfiintare={dataInfiintare}
        caen={caen}
        caenDescription={caenDescription}
        adress={adress}
        formaJuridica={formaJuridica}
      />

      <form className="flex flex-col gap-3 pb-32">
        <Input
          name="caen"
          type="number"
          label="CAEN"
          defaultValue={caen || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "caen")}
          key={caen || Math.random()}
        />

        <Input
          name="prccode"
          type="text"
          label="PRODCOM"
          defaultValue={prccode || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "prccode")}
          key={prccode || Math.random()}
        />

        <Input
          name="produsulServiciul"
          type="text"
          label="Produsul / Serviciul"
          defaultValue={produsulServiciul || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "produsulServiciul")}
          key={produsulServiciul || Math.random()}
        />

        <Input
          name="piataTinta"
          type="text"
          label="Piața țintă"
          defaultValue={piataTinta || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "piataTinta")}
          key={piataTinta || Math.random()}
        />

        <Select
          name="ariaGeografica"
          label="Aria geografică de acoperire a pieței țintă"
          options={ARII_GEOGRAFICE}
          value={ariaGeografica || "Selecteaza aria geografica"}
          disabled={isUpdating}
          onChange={(event) => handleUpdate(event, "ariaGeografica")}
          className="mb-5 p-2.5"
        />

        <Select
          name="clientiTinta"
          label="Clienții țintă"
          options={CLIENTI_TINTA}
          value={clientiTinta || "Selectează clienții țintă"}
          disabled={isUpdating}
          onChange={(event) => handleUpdate(event, "clientiTinta")}
          className="p-2.5"
        />
      </form>
    </>
  );
}

CompanyForm.propTypes = {
  companyId: PropTypes.number,
};

export default CompanyForm;
