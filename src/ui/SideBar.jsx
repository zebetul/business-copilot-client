import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";

function SideBar() {
  return (
    <div className="w-60 px-3 h-full flex flex-col">
<DarkModeToggle />

      <h1 className="mt-8 mb-20 flex flex-col text-center text-2xl font-bold text-textColorLight">
        <span>BUSINESS</span>

        <span>COPILOT</span>
      </h1>

      <MainNav />

      <UserPill />
    </div>
  );
}

export default SideBar;
