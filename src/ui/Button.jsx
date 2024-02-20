import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button
      className="w-min border border-bgColorDark rounded-md p-2 flex flex-col items-center justify-center text-textColorLight hover:text-textColor text-sm transition-colors text-nowrap"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
