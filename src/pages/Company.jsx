import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Header1 from "../ui/Header1";

function Company() {
  return (
    <section className="relative mx-auto h-full w-full max-w-2xl">
      <Header1>
        <BuildingOfficeIcon className="my-auto h-10 w-10" />

        <span className="ml-2">Company</span>
      </Header1>

      {/* <ProfileFrom /> */}
    </section>
  );
}

export default Company;
