import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function InteractionComponent({ item }) {
  const { id, title } = item;

  return (
    <li className="history_item">
      <NavLink
        to={`/history/${id}`}
        className="history_item_text text-sm text-textColorLight dark:text-textColor hover:text-textColor dark:hover:text-textColorLight transition-colors"
      >
        <p className="history_item_title py-5 border-b">{title}</p>
      </NavLink>
    </li>
  );
}

InteractionComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default InteractionComponent;
