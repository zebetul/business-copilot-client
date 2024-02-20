import PropTypes from "prop-types";
import { DEFAULT_REQUESTS } from "../../config/constants";

function DefaultContent({ sendRequest }) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="mt-40 mb-3 text-6xl font-bold text-textColorLight dark:text-textColor text-center">
        Make your request
      </h1>

      <h2 className="mb-7 text-lg font-bold text-textColorLight dark:text-textColor">
        Choose a request from below or type your own request.
      </h2>

      <ul className="requests_container flex flex-row gap-2 flex-wrap justify-center">
        {DEFAULT_REQUESTS.map((request, index) => (
          <li key={index}>
            <button
              className="p-2 border rounded-md text-xs text-textColorLight dark:text-textColor font-bold hover:bg-bgColor dark:hover:bg-bgColorDark transition-colors"
              onClick={() => sendRequest(request.description)}
            >
              {request.title}
            </button>
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
