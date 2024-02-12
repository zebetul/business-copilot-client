import { ArrowUpIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function PromptInput({ userRequest, setUserRequest, handleUserRequest }) {
  return (
    <div className="absolute bottom-20 w-full max-w-2xl p-2 pl-5 flex flex-row border-2 border-textColorLight rounded-full bg-bgColorLight">
      <input
        type="text"
        placeholder="Give an assignment..."
        autoComplete="off"
        className="outline-none bg-bgColorLight text-textColor font-sans w-5/6"
        value={userRequest}
        onChange={(e) => setUserRequest(e.target.value)}
      />

      <button
        className="ms-auto p-2 rounded-full bg-bgColor"
        onClick={handleUserRequest}
      >
        <ArrowUpIcon className="h-6 w-6 text-textColorLight" />
      </button>
    </div>
  );
}

PromptInput.propTypes = {
  userRequest: PropTypes.string,
  setUserRequest: PropTypes.func,
  handleUserRequest: PropTypes.func,
};

export default PromptInput;
