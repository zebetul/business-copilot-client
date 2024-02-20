import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className="w-60 h-full flex flex-col">
      <h1 className="mt-8 mb-20 flex flex-col text-center text-2xl font-bold text-textColorLight dark:text-textColor">
        <span>BUSINESS</span>

        <span>COPILOT</span>
      </h1>

      <MainNav />

      <DarkModeToggle />
    </div>
  );
}

export default SideBar;
