import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function InteractionRow({ item }) {
  const { id, title } = item;

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

InteractionRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default InteractionRow;
