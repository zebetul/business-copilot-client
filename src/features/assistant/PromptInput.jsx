import { ArrowUpIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function PromptInput({ userPrompt, setUserPrompt, handleUserPrompt }) {
  return (
    <div className="fixed w-full max-w-xl bottom-10 left-1/3 p-2 pl-5 flex flex-row border-2 border-textColorLight rounded-full bg-white">
      <input
        type="text"
        placeholder="Give an assignment..."
        autoComplete="off"
        className="outline-none text-textColor font-sans w-5/6"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
      />

      <button
        className="ms-auto p-2 rounded-full bg-bodyColor"
        onClick={handleUserPrompt}
      >
        <ArrowUpIcon className="h-6 w-6 text-textColorLight" />
      </button>
    </div>
  );
}

PromptInput.propTypes = {
  userPrompt: PropTypes.string,
  setUserPrompt: PropTypes.func,
  handleUserPrompt: PropTypes.func,
};

export default PromptInput;
