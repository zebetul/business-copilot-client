import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="h-screen py-3 pe-3 flex bg-bgColor text-textColor">
      <SideBar />

      <main className="main w-full h-full pt-10 bg-bgColorLight rounded-md overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
