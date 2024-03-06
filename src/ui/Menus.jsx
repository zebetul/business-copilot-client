import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";
import useOutsideClick from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        openId,
        close,
        open,
        position,
        setPosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex items-center justify-center">{children}</div>;
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: rect.x,
      y: rect.y + rect.height,
    });

    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <ButtonIcon id={id} type="withoutBg" onClick={handleClick}>
      <EllipsisVerticalIcon className="h-5 w-5" />
    </ButtonIcon>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const { ref } = useOutsideClick(close);

  if (openId !== id) return null;

  // Create a Portal to render the list outside of the current component, on the document body
  return createPortal(
    <ul
      className="fixed flex w-40 flex-col gap-2 rounded-md border border-bgColorLight bg-bgColor p-1 shadow-lg"
      style={{ top: position.y, left: position.x }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, onClick, disabled }) {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick();
    close();
  };

  return (
    <li>
      <ButtonIcon type="withText" onClick={handleClick} disabled={disabled}>
        {children}
      </ButtonIcon>
    </li>
  );
}

Menus.propTypes = {
  children: PropTypes.node.isRequired,
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

Toggle.propTypes = {
  id: PropTypes.number.isRequired,
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.object,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
