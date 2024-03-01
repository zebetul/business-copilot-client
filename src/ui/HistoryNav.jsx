import Loading from "./Loading";
import Error from "./Error";
import { useHistory } from "../features/history/useHistory";
import CustomNavLink from "./CustomNavLink";

function HistoryNav() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <ul className="history_list flex flex-col gap-1 pl-5">
      {history.map((item) => (
        <li key={item.id}>
          <CustomNavLink to={`/history/${item.id}`} type="small">
            <p className="overflow-hidden text-ellipsis">{item.title}</p>
          </CustomNavLink>
        </li>
      ))}
    </ul>
  );
}

export default HistoryNav;
