import PropTypes from "prop-types";
import useUpdateHistoryRecord from "./useUpdateHistoryRecord";

function RenameRecord({ record, close }) {
  const { id, title } = record;
  const { isUpdating: isRenaming, updateRecord } = useUpdateHistoryRecord();

  const onRenameRecord = (e) => {
    const newTitle = e.target.value;

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

  return (
    <input
      defaultValue={title}
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
