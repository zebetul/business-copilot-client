import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navigation text-textColorLight text-sm font-semibold">
      <ul className="flex flex-col gap-5">
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/documents">Documents</NavLink>
        </li>

        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
