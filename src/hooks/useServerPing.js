import { useEffect } from "react";

const useServerPing = () => {
  useEffect(() => {
    const pingServer = async () => {
      try {
        // Make a request to ping the server
        const response = await fetch(`${import.meta.env.VITE_API_URL}/`);

        // If the server is down, throw an error
        if (!response.ok) {
          throw new Error("Server is down");
        }

        // If the server is up, log a message
        console.log("Server is up");
      } catch (error) {
        // If the server is down, log an error
        console.error("Server is down");
      }
    };

    // Ping the server when the component mounts
    pingServer();
  }, []);
};

export default useServerPing;
