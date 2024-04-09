import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import RecordRow from "./RecordRow";
import { useHistory } from "./useHistory";
import { useCompany } from "../../contexts/CompanyContext";
import NoCompanySelected from "../../ui/NoCompanySelected";

function HistoryList() {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;
  const { history, isLoading, error } = useHistory(companyId);

  if (!companyId) return <NoCompanySelected />;

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  if (history.length === 0)
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-xl text-textColorLight">
          No records yet for {currentCompany.title}
        </p>
      </div>
    );

  return (
    <ul className="history_page_list mx-auto flex w-full flex-col overflow-hidden border-t border-bgColorDark">
      {history.map((record) => (
        <li className="history_item" key={record.id}>
          <RecordRow record={record} />
        </li>
      ))}
    </ul>
  );
}

export default HistoryList;
