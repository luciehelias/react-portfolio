import Input from "../basics/Input";

const FormElement = ({
  label,
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
}) => {
  return (
    <>
      {name === "honeypot" ? (
        <div style={{ display: "none" }}>
          <label>{label}</label>
          <input type={type} value={value} onChange={onChange} />
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <label className="my-4 lg:text-xl">
            {label} <span className="text-red-600">*</span>
          </label>
          <Input
            type={type}
            placeholder={placeholder}
            name={name}
            required={required}
          />
        </div>
      )}
    </>
  );
};

export default FormElement;
