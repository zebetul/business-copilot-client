import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";
import Logo from "../ui/Logo";
import HistoryNav from "../features/history/HistoryNav";

function AppLayout() {
  return (
    <div className="app_layout flex h-screen md:py-3 md:pe-3">
      <SideBar>
        <DarkModeToggle />

        <Logo className="my-10" />

        <MainNav />

        <HistoryNav />

        <UserPill className="mt-auto" />
      </SideBar>

      <main className="main flex h-full w-full flex-col overflow-x-hidden overflow-y-scroll bg-bgColorLight px-2 md:rounded-md">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
