interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={title} className="block font-elec text-sm font-semibold">
        {title}
      </label>
      {type == "text" && (
        <input
          id={title}
          type="text"
          placeholder={placeholder}
          className="mt-2 w-full rounded-md border-2 border-gray-400 p-4 py-3"
        />
      )}
      {type == "textarea" && (
        <textarea
          id={title}
          placeholder={placeholder}
          className="mt-2 w-full rounded-md border-2 border-gray-400 p-4 py-3"
        />
      )}
    </div>
  );
};

export default Input;
