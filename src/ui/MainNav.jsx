import {
  BuildingOfficeIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  RectangleStackIcon,
  // PencilSquareIcon,
} from "@heroicons/react/24/outline";

import CustomNavLink from "./CustomNavLink";
import ButtonIcon from "./ButtonIcon";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navigation text-md font-semibold text-textColorLight">
      <ul className="nav_links flex flex-col gap-1">
        <li>
          <CustomNavLink to="/company" type="primary">
            <BuildingOfficeIcon className="h-5 w-5 text-accentColor" />

            <span>Company</span>
          </CustomNavLink>
        </li>

        <li>
          <CustomNavLink to="/assistant" type="primary">
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-accentColor" />

            <span>Assistant</span>

            {/* <NavLink to="/assistant" className="ms-auto">
              <ButtonIcon>
                <PencilSquareIcon className="h-5 w-5" />
              </ButtonIcon>
            </NavLink> */}
          </CustomNavLink>
        </li>

        <li>
          <CustomNavLink to="/documents" type="primary">
            <ClipboardDocumentListIcon className="h-5 w-5 text-accentColor" />

            <span>Documents</span>
          </CustomNavLink>
        </li>

        <li>
          <CustomNavLink to="/history" type="primary">
            <RectangleStackIcon className="h-5 w-5 text-accentColor" />

            <span>History</span>
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
