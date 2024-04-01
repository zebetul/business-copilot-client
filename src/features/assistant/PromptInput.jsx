import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

import useKey from "../../hooks/useKey";

function PromptInput({ sendRequest, isSending }) {
  const inputEl = useRef(null);
  const [userRequest, setUserRequest] = useState("");

  const handleRequest = async () => {
    sendRequest({ title: "Default", userRequest });
    setUserRequest("");
  };

  // When Enter key is pressed focus the input if is not already focused, otherwise send the request
  useKey("Enter", function () {
    if (document.activeElement !== inputEl.current)
      return inputEl.current.focus();

    handleRequest();
  });

  return (
    <div
      className={`absolute bottom-2 left-1/2 flex w-full max-w-md -translate-x-1/2 flex-row rounded-full border border-bgColorHighlight bg-bgColorLight p-2 pl-5 transition-colors duration-300 md:max-w-2xl [&:has(textarea:focus)]:border-textColorLight`}
    >
      <textarea
        rows={1}
        placeholder="Input your request here..."
        autoComplete="off"
        className="my-auto w-5/6 resize-none bg-bgColorLight font-sans text-textColor outline-none placeholder:text-textColorLight"
        value={userRequest}
        onChange={(e) => setUserRequest(e.target.value)}
        ref={inputEl}
        disabled={isSending}
      />

      <button
        className="ms-auto rounded-full bg-bgColorDark p-2 text-textColorLight transition-colors duration-300 hover:bg-bgColorHighlight hover:text-textColor"
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
