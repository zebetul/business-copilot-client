import { ArrowUpIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function PromptInput({ userPrompt, setUserPrompt, handleUserPrompt }) {
  return (
    <div className="absolute bottom-20 w-full max-w-2xl p-2 pl-5 flex flex-row border-2 border-textColorLight rounded-full bg-bgColorLight">
      <input
        type="text"
        placeholder="Give an assignment..."
        autoComplete="off"
        className="outline-none bg-bgColorLight text-textColor font-sans w-5/6"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
      />

      <button
        className="ms-auto p-2 rounded-full bg-bgColor"
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
