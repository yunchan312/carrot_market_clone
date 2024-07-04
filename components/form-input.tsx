interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent px-3 focus:ring-orange-500 ring-neutral-200 rounded-md w-full h-10 transition focus:outline-none ring-2 focus:ring-4"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <div key={index} className="text-red-500 font-medium">
          {error}
        </div>
      ))}
    </div>
  );
}
