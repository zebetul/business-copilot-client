import PropTypes from "prop-types";

function Select({
  name,
  label,
  className,
  options,
  defaultValue,
  value,
  onChange,
  disabled,
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="mb-2 block text-xs">
          {label}
        </label>
      )}

      <select
        className={`w-full rounded-lg bg-bgColorDark p-2 text-textColor transition duration-300 ease-in-out placeholder:text-textColorLight focus:border-transparent focus:outline-none focus:ring-1 focus:ring-accentColorLight ${className}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-2">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Select;
