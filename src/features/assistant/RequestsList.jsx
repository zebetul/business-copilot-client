import Button from "../../ui/Button";
import PropTypes from "prop-types";

function RequestsList({ requests, sendRequest }) {
  return (
    <ul className="flex flex-col gap-2">
      {requests.map((request) => {
        const { title, userRequest } = request;

        return (
          <li key={request.title} className="w-full">
            <Button
              className="w-full overflow-hidden"
              onClick={() => sendRequest(request)}
              disabled={!userRequest}
            >
              {title}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

RequestsList.propTypes = {
  requests: PropTypes.array.isRequired,
  sendRequest: PropTypes.func.isRequired,
};

export default RequestsList;
