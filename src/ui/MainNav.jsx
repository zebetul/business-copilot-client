import { NavLink } from "react-router-dom";
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { useHistory } from "../features/assistant/useHistory";

function MainNav() {
  const { history, isLoading, error } = useHistory();

  return (
    <nav className="navigation text-textColorLight text-md font-semibold">
      <ul className="nav_links flex flex-col px-3 gap-1">
        <li>
          <NavLink exact="true" to="/">
            <HomeIcon className="h-6 w-6" />

            <span className="ml-2">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/assistant">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />

            <span className="ml-2">Assistant</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/documents">
            <ClipboardDocumentListIcon className="h-6 w-6" />

            <span className="ml-2">Documents</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/history">
            <RectangleStackIcon className="h-6 w-6" />

            <span className="ml-2">History</span>
          </NavLink>

          {isLoading && <span>Loading...</span>}

          {error && <span>Error: {error.message}</span>}

          {history && (
            <ul className="history_list pl-5 flex flex-col gap-1">
              {history.map((item) => (
                <li key={item.id} className="text-xs">
                  <NavLink to={`/history/${item.id}`}>
                    <p className="overflow-hidden text-ellipsis">
                      {item.title}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
