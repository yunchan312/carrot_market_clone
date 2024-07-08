import { InputHTMLAttributes } from "react";

interface InputProps {
  errors?: string[];
  name: string;
}

export default function Input({
  errors = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent px-3 focus:ring-orange-500 ring-neutral-200 rounded-md w-full h-10 transition focus:outline-none ring-2 focus:ring-4"
        {...rest}
      />
      {errors
        ? errors.map((error, index) => (
            <div key={index} className="text-red-500 font-medium">
              {error}
            </div>
          ))
        : null}
    </div>
  );
}
