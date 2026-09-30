import { theme } from "../../utils/theme";

const base = (error) =>
  [
    "w-full rounded-md px-3.5 py-3",
    theme.inputBg,
    error ? theme.inputErrorBorder : theme.inputBorder,
    theme.inputFocus,
    theme.inputPlaceholder,
    theme.inputText,
    theme.fontInput,
    "transition-colors duration-200",
    "border",
  ].join(" ");

export const InputField = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  label,
  ...rest
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="sr-only">
      {label || placeholder}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={base(error)}
      {...rest}
    />
    {error && (
      <span id={`${id}-error`} className={`${theme.textError} text-xs`} role="alert">
        {error}
      </span>
    )}
  </div>
);

export const TextareaField = ({
  id,
  placeholder,
  value,
  onChange,
  error,
  label,
  rows = 4,
  ...rest
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="sr-only">
      {label || placeholder}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${base(error)} resize-none`}
      {...rest}
    />
    {error && (
      <span id={`${id}-error`} className={`${theme.textError} text-xs`} role="alert">
        {error}
      </span>
    )}
  </div>
);
