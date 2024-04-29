import PropTypes from "prop-types";
import CompanyDetailRow from "./CompanyDetailRow";

function CompanyDetails({
  cui,
  formaJuridica,
  platitorTVA,
  nrRegCom,
  dataInfiintare,
  caen,
  caenDescription,
  adress,
}) {
  return (
    <div className="mb-5">
      <CompanyDetailRow label="CUI" value={cui} />

      <CompanyDetailRow label="Forma juridica" value={formaJuridica} />

      <CompanyDetailRow
        label="Platitor TVA"
        value={platitorTVA ? "Da" : "Nu"}
      />

      <CompanyDetailRow label="Nr. Reg. Com." value={nrRegCom} />

      <CompanyDetailRow label="Data infiintare" value={dataInfiintare} />

      <CompanyDetailRow label="Adresa" value={adress} />

      <CompanyDetailRow label="CAEN" value={`${caen} - ${caenDescription}`} />
    </div>
  );
}

CompanyDetails.propTypes = {
  cui: PropTypes.string,
  platitorTVA: PropTypes.bool,
  nrRegCom: PropTypes.string,
  dataInfiintare: PropTypes.string,
  caen: PropTypes.number,
  caenDescription: PropTypes.string,
  adress: PropTypes.string,
  formaJuridica: PropTypes.string,
};

export default CompanyDetails;
