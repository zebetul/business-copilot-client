import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className="w-60">
      <h1 className="mt-8 mb-20 flex flex-col text-center text-2xl font-bold text-textColorLight">
        <span>BUSINESS</span>

        <span>COPILOT</span>
      </h1>

      <MainNav />
    </div>
  );
}

export default SideBar;
