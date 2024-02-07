import { NavLink } from "react-router-dom";
import {
  ArchiveBoxIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

function MainNav() {
  return (
    <nav className="navigation text-textColorLight text-md font-semibold">
      <ul className="flex flex-col gap-1">
        <li>
          <NavLink exact="true" to="/">
            <HomeIcon className="h-6 w-6" />

            <span className="ml-2 align-bottom">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/chat">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />

            <span className="ml-2">Chat</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/documents">
            <ArchiveBoxIcon className="h-6 w-6" />

            <span className="ml-2">Documents</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
