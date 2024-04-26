import PropTypes from "prop-types";

function CompanyTitle({
  title,
  cui,
  platitorTVA,
  nrRegCom,
  dataInfiintare,
  caen,
  caenDescription,
  adress,
  formaJuridica,
}) {
  return (
    <div className="mb-10">
      <h2 className="m-0 mb-2 text-2xl">{title}</h2>

      <p className="mb-1 text-sm text-textColorLight">{formaJuridica}</p>

      <p className="mb-1 text-sm text-textColorLight">CUI: {cui}</p>

      <p className="mb-1 text-sm text-textColorLight">
        Platitor de TVA: {platitorTVA ? "Da" : "Nu"}
      </p>

      <p className="mb-1 text-sm text-textColorLight">
        Nr. Reg. Com.: {nrRegCom}
      </p>

      <p className="mb-1 text-sm text-textColorLight">
        Data inregistrare: {dataInfiintare}
      </p>

      <p className="mb-1 text-sm text-textColorLight">
        Cod CAEN: {caen} - {caenDescription}
      </p>

      <p className="mb-1 text-sm text-textColorLight">{adress}</p>
    </div>
  );
}

CompanyTitle.propTypes = {
  title: PropTypes.string,
  cui: PropTypes.string,
  platitorTVA: PropTypes.bool,
  nrRegCom: PropTypes.string,
  dataInfiintare: PropTypes.string,
  caen: PropTypes.string,
  caenDescription: PropTypes.string,
  adress: PropTypes.string,
  formaJuridica: PropTypes.string,
};

export default CompanyTitle;
