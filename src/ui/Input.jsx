import { PropTypes } from "prop-types";

function Input({
  name,
  label,
  register,
  error,
  required,
  type,
  validationSchema,
  disabled,
}) {
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-textColorLight"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        className="w-full rounded-lg border bg-bgColorLight px-3 py-2 text-textColor transition-all duration-300 placeholder:text-textColorLight focus:outline-none focus:ring-2 focus:ring-bgColor"
        type={type}
        id={name}
        autoComplete={name}
        {...register(name, validationSchema)}
        disabled={disabled}
      />

      {error && (
        <p className="mt-1 text-xs italic text-red-500">{error.message}</p>
      )}
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
};

export default Input;
