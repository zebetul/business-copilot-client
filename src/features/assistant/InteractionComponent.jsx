import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function InteractionComponent({ item }) {
  const { id, title } = item;

  return (
    <li className="history_item">
      <NavLink
        to={`${id}`}
        className="history_item_text text-sm text-textColorLight hover:text-textColor transition-colors"
      >
        <p className="history_item_title py-5 border-b border-bgColorDark">
          {title}
        </p>
      </NavLink>
    </li>
  );
}

InteractionComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default InteractionComponent;
