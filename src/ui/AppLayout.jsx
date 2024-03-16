import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";

function AppLayout() {
  return (
    <div className="flex h-screen py-3 pe-3">
      <SideBar>
        <DarkModeToggle />

        <h1 className="mb-20 mt-8 flex flex-col text-center text-2xl font-bold text-textColorLight">
          <span>BUSINESS</span>

          <span>COPILOT</span>
        </h1>

        <MainNav />

        <UserPill />
      </SideBar>

      <main className="main h-full w-full overflow-x-hidden overflow-y-scroll rounded-md bg-bgColorLight">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
