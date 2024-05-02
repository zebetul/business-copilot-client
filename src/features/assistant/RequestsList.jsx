import { TableCellsIcon } from "@heroicons/react/24/outline";
import { useCompany } from "../../contexts/CompanyContext";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

function RequestsList({ requests, sendRequest }) {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;

  return (
    <div className="flex flex-col gap-2">
      {requests.map((request) => {
        const { title, userRequest, type } = request;

        return (
          <div key={title} className="">
            <Button
              className="w-full items-start justify-start overflow-hidden"
              onClick={() => sendRequest({ ...request, companyId })}
              disabled={!userRequest}
            >
              {(type === "eurostat" || type === "topFirme") && (
                <TableCellsIcon className="mr-2 h-5 w-5" />
              )}

              {title}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

RequestsList.propTypes = {
  requests: PropTypes.array.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

export default RequestsList;
