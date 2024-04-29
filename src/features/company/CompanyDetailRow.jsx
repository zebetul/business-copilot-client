import PropTypes from "prop-types";

function CompanyDetailRow({ value, label }) {
  return (
    <div className="mb-2 flex md:mb-1">
      <p className="w-32 text-sm text-textColorLight">{label}:</p>

      <p className="text-sm text-textColor">{value}</p>
    </div>
  );
}

CompanyDetailRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};

export default CompanyDetailRow;
