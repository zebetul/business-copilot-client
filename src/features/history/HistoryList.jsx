import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import RecordRow from "./RecordRow";
import { useHistory } from "./useHistory";

function HistoryList() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    history && (
      <ul className="history_page_list mx-auto flex max-w-3xl flex-col overflow-hidden border-t border-bgColorDark">
        {history.map((record) => (
          <li className="history_item" key={record.id}>
            <RecordRow record={record} />
          </li>
        ))}
      </ul>
    )
  );
}

export default HistoryList;
