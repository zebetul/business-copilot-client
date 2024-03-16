import PropTypes from "prop-types";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { Bars3Icon } from "@heroicons/react/24/outline";

function SideBar({ children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="relative flex h-full flex-col md:px-1">
      <ButtonIcon
        onClick={toggle}
        className={`absolute top-0 z-10 ${open ? "right-2" : "-right-10"}`}
      >
        <Bars3Icon className="h-6 w-6" />
      </ButtonIcon>

      {open && (
        <div className="flex h-full w-80 flex-col overflow-y-auto px-2">
          {children}
        </div>
      )}
    </div>
  );
}

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
