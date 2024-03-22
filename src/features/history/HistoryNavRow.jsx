import { useState } from "react";
import PropTypes from "prop-types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import useDeleteHistoryItem from "./useDeleteHistoryItem";

import RenameRecord from "./RenameRecord";
import CustomNavLink from "../../ui/CustomNavLink";
import Menus from "../../ui/Menus";

function HistoryNavRow({ record }) {
  const { isDeleting, deleteItem } = useDeleteHistoryItem();
  const [isRenaming, setIsRenaming] = useState(false);

  const handleDelete = () => deleteItem(record.id);
  const openRename = () => setIsRenaming(true);
  const closeRename = () => setIsRenaming(false);

  return (
    <li>
      {isRenaming ? (
        <RenameRecord record={record} close={closeRename} />
      ) : (
        <CustomNavLink to={`/history/${record.id}`} type="small">
          <p className="overflow-hidden">{record.title}</p>

          <Menus.Menu>
            <Menus.Toggle id={record.id} />

            <Menus.List id={record.id}>
              <Menus.Button onClick={handleDelete} disabled={isDeleting}>
                <TrashIcon className="h-4 w-4" />

                <span>Delete</span>
              </Menus.Button>

              <Menus.Button onClick={openRename}>
                <PencilIcon className="h-4 w-4" />

                <span>Rename</span>
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </CustomNavLink>
      )}
    </li>
  );
}

HistoryNavRow.propTypes = {
  record: PropTypes.object.isRequired,
};

export default HistoryNavRow;
