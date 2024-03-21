import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

import useKey from "../../hooks/useKey";

function PromptInput({ sendRequest, isSending }) {
  const inputEl = useRef(null);
  const [userRequest, setUserRequest] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleRequest = async () => {
    sendRequest({ title: "Default", userRequest });

    setUserRequest("");
  };

  useKey("Enter", function () {
    // Focus the input if it's not already focused
    if (document.activeElement !== inputEl.current)
      return inputEl.current.focus();

    console.log(inputEl);

    handleRequest();
  });

  return (
    <div
      className={`absolute bottom-10 left-1/2 mx-auto flex w-full max-w-md -translate-x-1/2 flex-row rounded-full border border-textColorLight bg-bgColorLight p-2 pl-5 md:bottom-20 md:max-w-2xl ${isFocused ? "border-textColor" : ""} transition-colors duration-300`}
    >
      <input
        type="text"
        placeholder="Input your request here..."
        autoComplete="off"
        className="w-5/6 bg-bgColorLight font-sans text-textColor outline-none placeholder:text-textColorLight"
        value={userRequest}
        onChange={(e) => setUserRequest(e.target.value)}
        ref={inputEl}
        disabled={isSending}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <button
        className="hover:bg-bgColorHighlight ms-auto rounded-full bg-bgColorDark p-2 text-textColorLight transition-colors duration-300 hover:text-textColor"
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
