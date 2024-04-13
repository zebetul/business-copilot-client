import PropTypes from "prop-types";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(<div>{children}</div>, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="overlay fixed inset-0 z-50 backdrop-blur-md transition-all">
      <div
        className="modal fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-bgColorLight p-5 drop-shadow-xl transition-all"
        ref={ref}
      >
        <button className="ms-auto" onClick={close}>
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div>
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
Open.propTypes = {
  children: PropTypes.node.isRequired,
  opens: PropTypes.string.isRequired,
};
Window.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
