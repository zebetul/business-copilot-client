import {
	ChatBubbleBottomCenterTextIcon,
	ClipboardDocumentListIcon,
	RectangleStackIcon,
} from "@heroicons/react/24/outline";

import HistoryNav from "./HistoryNav";
import CustomNavLink from "./CustomNavLink";

function MainNav() {
	return (
		<nav className="navigation text-textColorLight text-md font-semibold">
			<ul className="nav_links flex flex-col gap-1">
				<li>
					<CustomNavLink
						to="/assistant"
						type="primary"
					>
						<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />

						<span>Assistant</span>
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink
						to="/documents"
						type="primary"
					>
						<ClipboardDocumentListIcon className="h-6 w-6" />

						<span>Documents</span>
					</CustomNavLink>
				</li>

				<li>
					<CustomNavLink
						to="/history"
						type="primary"
					>
						<RectangleStackIcon className="h-6 w-6" />

						<span>History</span>
					</CustomNavLink>
				</li>
			</ul>

			<HistoryNav />
		</nav>
	);
}

export default MainNav;
