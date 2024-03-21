import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";

function AppLayout() {
  return (
    <div className="flex h-screen md:py-3 md:pe-3">
      <SideBar>
        <DarkModeToggle />

        <h1 className="mb-16 mt-16 flex flex-col text-center text-3xl text-accentColor">
          <span>BUSINESS</span>

          <span>COPILOT</span>
        </h1>

        <MainNav />

        <UserPill />
      </SideBar>

      <main className="main flex h-full w-full flex-col overflow-x-hidden overflow-y-scroll bg-bgColorLight px-2 md:rounded-md">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
