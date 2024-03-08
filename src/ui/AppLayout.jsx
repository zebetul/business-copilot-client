import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="flex h-screen py-3 pe-3">
      <SideBar />

      <main className="main h-full w-full overflow-y-scroll rounded-md bg-bgColorLight">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
