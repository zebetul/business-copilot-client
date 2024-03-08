import PropTypes from "prop-types";
import useUpdateHistoryRecord from "./useUpdateHistoryRecord";
import useKey from "../../hooks/useKey";
import { useState } from "react";

function RenameRecord({ record, close }) {
  const { id, title } = record;
  const [newTitle, setNewTitle] = useState(title);
  const { isUpdating: isRenaming, updateRecord } = useUpdateHistoryRecord();

  const onRenameRecord = () => {
    if (newTitle === title || newTitle === "") return close();

    updateRecord(
      {
        id,
        title: newTitle,
      },
      {
        onSettled: () => close(),
      },
    );
  };

  useKey("Enter", onRenameRecord);

  return (
    <input
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      type="text"
      className="w-full rounded-md border bg-bgColorLight p-1 text-xs font-normal text-textColor transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bgColor"
      autoFocus
      onBlur={onRenameRecord}
      disabled={isRenaming}
    />
  );
}

RenameRecord.propTypes = {
  record: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default RenameRecord;
