import PropTypes from "prop-types";

import { DEFAULT_REQUESTS } from "../../config/constants";
import Button from "../../ui/Button";

function DefaultContent({ sendRequest }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-28">
      <h1 className="text-center text-6xl">Make your request</h1>

      <h2 className="mb-10 text-lg font-bold text-textColorLight">
        Choose a request from below or type your own request.
      </h2>

      <ul className="requests_container flex flex-row flex-wrap justify-center gap-2 text-lg">
        {DEFAULT_REQUESTS.map((request, index) => {
          const { title, prompt: userRequest } = request;

          return (
            <li key={index}>
              <Button
                onClick={() =>
                  sendRequest({
                    title,
                    userRequest,
                  })
                }
              >
                {request.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

DefaultContent.propTypes = {
  sendRequest: PropTypes.func.isRequired,
};

export default DefaultContent;
