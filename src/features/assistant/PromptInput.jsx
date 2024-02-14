import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import useKey from "./useKey";

function PromptInput({ sendRequest, isSending }) {
  const inputEl = useRef(null);
  const [userRequest, setUserRequest] = useState("");

  const handleRequest = async () => {
    sendRequest(userRequest);

    setUserRequest("");
  };

  useKey("Enter", function () {
    // Focus the input if it's not already focused
    if (document.activeElement !== inputEl.current)
      return inputEl.current.focus();

    handleRequest();
  });

  return (
    <div className="absolute bottom-20 w-full max-w-2xl p-2 pl-5 flex flex-row border-2 border-textColorLight rounded-full bg-bgColorLight">
      <input
        type="text"
        placeholder="Input your request here..."
        autoComplete="off"
        className="outline-none bg-bgColorLight text-textColor font-sans w-5/6"
        value={userRequest}
        onChange={(e) => setUserRequest(e.target.value)}
        ref={inputEl}
        disabled={isSending}
      />

      <button
        className="ms-auto p-2 rounded-full bg-bgColor"
        onClick={handleRequest}
        disabled={isSending}
      >
        <ArrowUpIcon className="h-6 w-6 text-textColorLight" />
      </button>
    </div>
  );
}

PromptInput.propTypes = {
  sendRequest: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default PromptInput;
