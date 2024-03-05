import { useHistory } from "./useHistory";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import HistoryNavRow from "./HistoryNavRow";
import Menus from "../../ui/Menus";

function HistoryNav() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <Menus>
      <ul className="history_list flex flex-col gap-1 pl-5">
        {history.map((item) => (
          <HistoryNavRow key={item.id} item={item} />
        ))}
      </ul>
    </Menus>
  );
}

export default HistoryNav;
