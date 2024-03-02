import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import InteractionComponent from "./InteractionComponent";
import { useHistory } from "./useHistory";

function HistoryList() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    history && (
      <ul className="history_page_list mx-auto flex max-w-3xl flex-col border-t border-bgColorDark">
        {history.map((item) => (
          <li className="history_item" key={item.id}>
            <InteractionComponent item={item} />
          </li>
        ))}
      </ul>
    )
  );
}

export default HistoryList;
