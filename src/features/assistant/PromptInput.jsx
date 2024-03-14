import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

import useKey from "../../hooks/useKey";

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
    <div className="absolute bottom-20 flex w-full max-w-2xl flex-row rounded-full border border-textColorLight bg-bgColorLight p-2 pl-5">
      <input
        type="text"
        placeholder="Input your request here..."
        autoComplete="off"
        className="w-5/6 bg-bgColorLight font-sans text-textColor outline-none placeholder:text-textColorLight"
        value={userRequest}
        onChange={(e) => setUserRequest(e.target.value)}
        ref={inputEl}
        disabled={isSending}
      />

      <button
        className="ms-auto rounded-full bg-bgColorDark p-2 text-textColorLight hover:text-textColor"
        onClick={handleRequest}
        disabled={isSending}
      >
        <ArrowUpIcon className="h-6 w-6 " />
      </button>
    </div>
  );
}

PromptInput.propTypes = {
  sendRequest: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default PromptInput;
