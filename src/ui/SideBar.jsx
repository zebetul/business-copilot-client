import PropTypes from "prop-types";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { Bars3Icon } from "@heroicons/react/24/outline";

function SideBar({ children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="relative flex h-full max-w-xs flex-col px-1">
      <ButtonIcon
        onClick={toggle}
        className={`absolute top-0 ${open ? "right-2" : "-right-10"}`}
      >
        <Bars3Icon className="h-5 w-5" />
      </ButtonIcon>

      {open && children}
    </div>
  );
}

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
