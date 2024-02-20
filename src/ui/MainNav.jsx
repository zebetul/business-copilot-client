import { NavLink } from "react-router-dom";
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import HistoryNav from "./HistoryNav";

function MainNav() {
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

          <HistoryNav />
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
