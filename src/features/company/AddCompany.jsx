import Button from "../../ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import { useState } from "react";

function AddCompany() {
  const [cui, setCui] = useState("");

  const onAddCompany = async () => {
    console.log(cui);

    // 1. Call M. Finante API to get company details with a POST request to https://webservicesp.anaf.ro/PlatitorTvaRest/api/v8/ws/tva with the following body: [
    // 	{
    // 		"cui": _Numar_, "data":"_Data interogarii_"
    // 	},
    // 	{
    //     	"cui": _Numar_, "data":"_Data interogarii_"
    // 	}
    // ]

    const response = await fetch(
      "https://webservicesp.anaf.ro/PlatitorTvaRest/api/v8/ws/tva",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            cui: cui,
            data: new Date().toISOString(),
          },
        ]),
      },
    );

    const data = await response.json();

    console.log(data);

    // 2. Save company details in the database

    // 3. On succes invalidate companies query
  };

  return (
    <Modal>
      <Modal.Open opens="add_company">
        <Button size="sm" variant="accent">
          <PlusIcon className="h-4 w-4" />

          <span className="">Add company</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="add_company">
        <div className="flex flex-col gap-5">
          <Input
            name="cui"
            type="text"
            label="CUI"
            required
            placeholder="CUI"
            value={cui}
            onChange={(e) => setCui(e.target.value)}
          />

          <Button variant="accent" onClick={onAddCompany}>
            Import
          </Button>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default AddCompany;
