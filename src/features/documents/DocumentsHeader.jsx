import { PlusIcon } from "@heroicons/react/24/outline";
import UploadDocument from "./UploadDocument";

function DocumentsHeader() {
  return (
    <header className="table_header grid h-10 grid-cols-3 items-center justify-center gap-3 border-b border-bgColorDark pb-4 text-sm font-bold">
      <p>Title</p>

      <p>Type</p>

      <UploadDocument className="ms-auto">
        <PlusIcon className="h-5 w-5" />
      </UploadDocument>
    </header>
  );
}

export default DocumentsHeader;
