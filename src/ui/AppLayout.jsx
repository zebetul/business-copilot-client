import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="h-screen py-3 pe-3 flex bg-bodyColor text-textColor">
      <SideBar />

      <main className="w-full h-full  p-5 bg-white rounded-md overflow-y-auto">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
