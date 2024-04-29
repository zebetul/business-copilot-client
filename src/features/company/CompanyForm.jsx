import PropTypes from "prop-types";

import useCompanyData from "./useCompany";
import useUpdateCompany from "./useUpdateCompany";

import { ARII_GEOGRAFICE, CLIENTI_TINTA } from "../../config/constants";
import Input from "../../ui/Input";
import Loading from "../../ui/Loading";
import Select from "../../ui/Select";
import Error from "../../ui/Error";
import CompanyDetails from "./CompanyDetails";
import useUpdateCaen from "./useUpdateCaen";
import ButtonIcon from "../../ui/ButtonIcon";
import { SparklesIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import useGeneratePiataTinta from "./useGeneratePiataTinta";

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
  const { updateCaen, isUpdatingCaen } = useUpdateCaen();
  const { generatePiataTinta, isUpdatingPiata } = useGeneratePiataTinta();

  function handleUpdate(event, field) {
    const newValue = event.target.value;

    if (newValue === company[field]) return;

    updateCompany({ [field]: newValue, id: company.id });
  }

  function handleUpdateCaen(event) {
    const newValue = event.target.value;

    if (+newValue === caen) return;

    updateCaen({ caen: +newValue, id: company.id });
  }

  function handleGeneratePiataTinta(event) {
    event.preventDefault();

    if (!produsulServiciul) return toast.error("Introdu produsul / serviciul");

    generatePiataTinta({ produsulServiciul, id: company.id });
  }

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <h2 className="m-0 mb-3 text-2xl">{title}</h2>

      <CompanyDetails
        cui={cui}
        platitorTVA={platitorTVA}
        nrRegCom={nrRegCom}
        dataInfiintare={dataInfiintare}
        caen={caen}
        caenDescription={caenDescription}
        adress={adress}
        formaJuridica={formaJuridica}
      />

      <form className="flex flex-col pb-32">
        <Input
          name="caen"
          type="number"
          label="CAEN"
          defaultValue={caen || ""}
          disabled={isUpdatingCaen}
          onBlur={(event) => handleUpdateCaen(event)}
          key={caen || Math.random()}
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

        <div className="flex flex-row items-center gap-4">
          <Input
            name="piataTinta"
            type="text"
            label="Piața țintă"
            defaultValue={piataTinta || ""}
            disabled={isUpdating || isUpdatingPiata}
            onBlur={(event) => handleUpdate(event, "piataTinta")}
            key={piataTinta || Math.random()}
          />

          <ButtonIcon
            className="mt-2"
            variant="accent"
            onClick={(event) => {
              handleGeneratePiataTinta(event);
            }}
            disabled={isUpdating || isUpdatingPiata}
          >
            <SparklesIcon className="h-6 w-6" />
          </ButtonIcon>
        </div>

        <Input
          name="prccode"
          type="text"
          label="PRODCOM"
          defaultValue={prccode || ""}
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "prccode")}
          key={prccode || Math.random()}
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
