import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DarkModeToggle from "./DarkModeToggle";
import MainNav from "./MainNav";
import UserPill from "./UserPill";
import Logo from "../ui/Logo";

function AppLayout() {
  return (
    <div className="flex h-screen md:py-3 md:pe-3">
      <SideBar>
        <DarkModeToggle />

        <div className="my-10 w-full">
          <Logo />
        </div>

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
