import { useHistory } from "./useHistory";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import HistoryNavRow from "./HistoryNavRow";
import Menus from "../../ui/Menus";

function HistoryNav() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <Menus>
      <ul className="history_nav flex flex-col gap-1 overflow-y-scroll pl-5">
        {history.map((record) => (
          <HistoryNavRow key={record.id} record={record} />
        ))}
      </ul>
    </Menus>
  );
}

export default HistoryNav;
