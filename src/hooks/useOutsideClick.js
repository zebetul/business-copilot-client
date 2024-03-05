import { useEffect, useRef } from "react";
/**
 * Custom hook to handle click outside of an element. It's useful to close a dropdown menu or modal window when clicking outside of it.
 * @param {Function} handler
 * @param {Boolean} listenCapturing
 * @returns {Object} ref
 */
function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // If the element is not a descendant of the ref, then call the handler
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      // ListenCapturing is a boolean value indicating if the event will be captured in the capturing or bubbling phase. The default value is true so the event will be captured in the capturing phase.
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return { ref };
}

export default useOutsideClick;
