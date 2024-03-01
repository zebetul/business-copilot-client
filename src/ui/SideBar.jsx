import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";

function SideBar() {
  return (
    <div className="flex h-full w-60 flex-col px-3">
      <DarkModeToggle />

      <h1 className="mb-20 mt-8 flex flex-col text-center text-2xl font-bold text-textColorLight">
        {/* <span className="logo mb-2 text-4xl">📈</span> */}

        <span>BUSINESS</span>

        <span>COPILOT</span>
      </h1>

      <MainNav />

      <UserPill />
    </div>
  );
}

export default SideBar;
