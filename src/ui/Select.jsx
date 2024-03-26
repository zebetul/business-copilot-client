import PropTypes from "prop-types";

function Select({
  name,
  label,
  options,
  defaultValue,
  disabled,
  onBlur = () => {},
}) {
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-textColorLight"
      >
        {label}
      </label>

      <select
        className="w-full rounded-lg bg-bgColorDark px-3 py-2.5 text-textColor transition duration-300 ease-in-out placeholder:text-textColorLight focus:border-transparent focus:outline-none focus:ring-1 focus:ring-textColorLight"
        id={name}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <option key={option} value={option} className="py-2">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default Select;
