import { Toaster } from "react-hot-toast";

function CustomToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          maxWidth: "500px",
          padding: "16px, 24px",
          backgroundColor: "rgb(var(--bgColorLight))",
          color: "rgb(var(--textColor))",
        },
      }}
    />
  );
}

export default CustomToaster;
