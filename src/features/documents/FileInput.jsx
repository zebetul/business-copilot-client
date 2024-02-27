import PropTypes from "prop-types";

function FileInput({ children, onChange, disabled, className }) {
  return (
    <label
      htmlFor="file"
      className={`flex h-min w-min cursor-pointer items-center justify-center rounded-md p-2 text-sm text-textColorLight transition-colors hover:bg-bgColorDark ${className}`}
    >
      {children}

      <input
        className="sr-only"
        name="file"
        id="file"
        type="file"
        aria-label="File browser"
        onChange={(event) => onChange(event.target.files[0])}
        disabled={disabled}
      />
    </label>
  );
}

FileInput.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default FileInput;
