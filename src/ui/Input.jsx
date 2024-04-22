import { PropTypes } from "prop-types";

function Input({
  name,
  label,
  register = () => {},
  error,
  required,
  type,
  validationSchema,
  disabled,
  defaultValue,
  onBlur,
  value,
  onChange = () => {},
  placeholder,
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-2 block text-xs">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        className="w-full rounded-lg bg-bgColorDark px-3 py-2 text-textColor transition duration-300 ease-in-out placeholder:text-textColorLight focus:border-transparent focus:outline-none focus:ring-1 focus:ring-accentColorLight"
        type={type}
        id={name}
        autoComplete={name}
        {...register(name, validationSchema)}
        disabled={disabled}
        defaultValue={defaultValue}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <div className="mt-1 h-4">
        {error && (
          <p className="text-xs italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  register: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  validationSchema: PropTypes.object,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
};

export default Input;
