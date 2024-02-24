import { NavLink } from "react-router-dom";
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

import HistoryNav from "./HistoryNav";

function MainNav() {
  return (
    <nav className="navigation text-textColorLight text-md font-semibold">
      <ul className="nav_links flex flex-col gap-1">
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
        </li>
      </ul>

      <HistoryNav />
    </nav>
  );
}

export default MainNav;
