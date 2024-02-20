import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="h-screen py-3 pe-3 flex bg-bgColor dark:bg-black text-textColor dark:text-textColorLight">
      <SideBar />

      <main className="w-full h-full pt-10 bg-bgColorLight dark:bg-bgColorDark rounded-md overflow-y-scroll">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
