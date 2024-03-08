import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ children, onClose }) {
  const { ref } = useOutsideClick(onClose);

  return createPortal(
    <div className="overlay fixed inset-0 z-50 backdrop-blur-sm transition-all">
      <div
        ref={ref}
        className="modal fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-bgColorLight p-10 shadow-xl transition-all"
      >
        <button className="ms-auto" onClick={onClose}>
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
