import Input from "./Input";

type FormElementProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormElement = ({
  label,
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
}: FormElementProps) => {
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
