type InputProps = {
  type: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
};

const Input = ({ type, placeholder, name, required }: InputProps) => {
  return (
    <div>
      {type === "message" ? (
        <textarea
          placeholder={placeholder}
          name={name}
          required
          className="text-start my-2 p-2 border border-zinc-400 rounded-xl h-40 lg:text-lg w-full"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          required={required}
          className="my-2 p-2 border border-zinc-400 rounded-xl lg:text-lg w-full"
        />
      )}
    </div>
  );
};

export default Input;
