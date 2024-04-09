import { useHistory } from "./useHistory";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import HistoryNavRow from "./HistoryNavRow";
import Menus from "../../ui/Menus";
import { useCompany } from "../../contexts/CompanyContext";

function HistoryNav() {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;
  const { history, isLoading, error } = useHistory(companyId);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  if (!history) return null;

  return (
    <Menus>
      <ul className="history_nav nav_links flex flex-col gap-1 overflow-y-auto overflow-x-hidden pl-5 text-textColorLight">
        {history.map((record) => (
          <HistoryNavRow key={record.id} record={record} />
        ))}
      </ul>
    </Menus>
  );
}

export default HistoryNav;
