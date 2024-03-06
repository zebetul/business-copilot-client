import PropTypes from "prop-types";
import useRenameRecord from "./useRenameRecord";

function RenameRecord({ record, close }) {
  const { id, title } = record;
  const { renameRecord } = useRenameRecord();

  const onRenameRecord = (e) => {
    const newTitle = e.target.value;

    // If title changed dispatch an action to rename the record
    if (newTitle !== title && newTitle !== "")
      renameRecord({
        id,
        title: newTitle,
      });

    // Close RenameRecord component
    close();
  };

  return (
    <input
      defaultValue={title}
      type="text"
      className="w-full rounded-md border bg-bgColorLight p-1 text-xs font-normal text-textColor transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bgColor"
      autoFocus
      onBlur={onRenameRecord}
    />
  );
}

RenameRecord.propTypes = {
  record: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default RenameRecord;
