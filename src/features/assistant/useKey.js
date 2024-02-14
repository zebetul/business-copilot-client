import { useEffect } from "react";

function useKey(key, callback) {
  useEffect(() => {
    function handle(event) {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [key, callback]);
}

export default useKey;
