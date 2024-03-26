import PropTypes from "prop-types";
import { useState } from "react";

import toast from "react-hot-toast";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

import ButtonIcon from "./ButtonIcon";

function ClipboardCopy({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);

      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy to clipboard");

      console.error("Failed to copy to clipboard", err);
    }
  };

  return (
    <ButtonIcon className="ml-auto mt-2" type="withText" onClick={handleCopy}>
      {!isCopied ? (
        <>
          <ClipboardDocumentIcon className="h-6 w-6" />

          <span>Copy</span>
        </>
      ) : (
        <>
          <ClipboardDocumentCheckIcon className="h-6 w-6" />

          <span>Copied</span>
        </>
      )}
    </ButtonIcon>
  );
}

ClipboardCopy.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClipboardCopy;
