import { useCompany } from "../../contexts/CompanyContext";
import PropTypes from "prop-types";
import RequestItem from "./RequestItem";

function RequestsList({ requests, sendRequest }) {
  const { currentCompany } = useCompany();
  const companyId = currentCompany?.id;

  return (
    <div className="flex flex-wrap gap-3 pb-5">
      {requests.map((request) => {
        return (
          <RequestItem
            key={request.title}
            request={request}
            sendRequest={sendRequest}
            companyId={companyId}
          />
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
