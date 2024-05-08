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
      <div className="h-min w-full">{children}</div>
    </DropdownContext.Provider>
  );
}

function DropdownHeader({ children }) {
  const { isOpen, toggleOpen } = useContext(DropdownContext);

  return (
    <div
      className="flex cursor-pointer flex-row items-center gap-2 p-2 text-textColorLight"
      onClick={toggleOpen}
    >
      {isOpen ? (
        <ChevronUpIcon className="mr-2 h-6 w-6" />
      ) : (
        <ChevronDownIcon className="mr-2 h-6 w-6" />
      )}

      {children}
    </div>
  );
}

function DropdownContent({ children }) {
  const { isOpen } = useContext(DropdownContext);

  return isOpen ? <div className="p-2">{children}</div> : null;
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
