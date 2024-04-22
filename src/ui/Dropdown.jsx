import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleOpen,
      }}
    >
      <div className="h-min w-full rounded-lg border border-bgColorDark">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownHeader({ children }) {
  const { isOpen, toggleOpen } = useContext(DropdownContext);

  return (
    <div
      className="flex cursor-pointer flex-row items-center gap-3 p-4 text-textColorLight"
      onClick={toggleOpen}
    >
      {children}

      {isOpen ? (
        <ChevronUpIcon className="ml-auto h-5 w-5" />
      ) : (
        <ChevronDownIcon className="ml-auto h-5 w-5" />
      )}
    </div>
  );
}

function DropdownContent({ children }) {
  const { isOpen } = useContext(DropdownContext);

  return isOpen ? <div className="p-4">{children}</div> : null;
}

Dropdown.Header = DropdownHeader;
Dropdown.Content = DropdownContent;

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};
DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
DropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dropdown;
