import { NavLink } from "react-router-dom";

import Loading from "./Loading";
import Error from "./Error";
import { useHistory } from "../features/assistant/useHistory";

function HistoryNav() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <ul className="history_list pl-5 flex flex-col gap-1 font-normal">
      {history.map((item) => (
        <li key={item.id} className="text-xs">
          <NavLink to={`/history/${item.id}`}>
            <p className="overflow-hidden text-ellipsis">{item.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default HistoryNav;
