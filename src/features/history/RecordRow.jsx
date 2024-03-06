import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function RecordRow({ record }) {
  const { id, title } = record;

  return (
    <NavLink
      to={`${id}`}
      className="history_item_text text-sm text-textColorLight transition-colors hover:text-textColor"
    >
      <p className="history_item_title border-b border-bgColorDark py-5">
        {title}
      </p>
    </NavLink>
  );
}

RecordRow.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordRow;
