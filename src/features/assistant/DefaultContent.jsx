import PropTypes from "prop-types";

import { DEFAULT_REQUESTS } from "../../config/constants";
import Button from "../../ui/Button";

function DefaultContent({ sendRequest }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="mt-40 mb-3 text-6xl text-center">Make your request</h1>

      <h2 className="mb-7 text-lg font-bold text-textColorLight">
        Choose a request from below or type your own request.
      </h2>

      <ul className="requests_container flex flex-row gap-2 flex-wrap justify-center">
        {DEFAULT_REQUESTS.map((request, index) => (
          <li key={index}>
            <Button onClick={() => sendRequest(request.description)}>
              {request.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

DefaultContent.propTypes = {
  sendRequest: PropTypes.func.isRequired,
};

export default DefaultContent;
