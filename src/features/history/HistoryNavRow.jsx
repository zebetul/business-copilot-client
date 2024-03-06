import CustomNavLink from "../../ui/CustomNavLink";
import PropTypes from "prop-types";
import Menus from "../../ui/Menus";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import useDeleteHistoryItem from "./useDeleteHistoryItem";

function HistoryNavRow({ item }) {
  const { isDeleting, deleteItem } = useDeleteHistoryItem();

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const handleRename = () => {
    console.log("Edit item", item.id);
  };

  return (
    <li>
      <CustomNavLink to={`/history/${item.id}`} type="small">
        <p className="overflow-hidden">{item.title}</p>

        <Menus.Menu>
          <Menus.Toggle id={item.id} />

          <Menus.List id={item.id}>
            <Menus.Button onClick={handleDelete} disabled={isDeleting}>
              <TrashIcon className="h-4 w-4" />
              <span>Delete</span>
            </Menus.Button>

            <Menus.Button onClick={handleRename}>
              <PencilIcon className="h-4 w-4" />
              <span>Rename</span>
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </CustomNavLink>
    </li>
  );
}

HistoryNavRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HistoryNavRow;
