import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="rounded-full ms-5 mt-auto h-10 w-10 hover:bg-bgColorDark flex justify-center items-center"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
}

export default DarkModeToggle;
