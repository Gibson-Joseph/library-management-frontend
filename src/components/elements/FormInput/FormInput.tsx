import { memo } from "react";
const FormInput = ({ name, register, errors }: any) => {
  console.log("errorserrors", errors);

  return (
    <div className="py-2">
      <label htmlFor="" className="font-epilogue text-gray-400">
        {name}
      </label>
      <input
        {...register(name, {
          required: { value: true, message: "Required" },
        })}
        className={` ${
          errors[name]?.message && "border-b-red-500"
        } border-b w-full focus:outline-none placeholder:text-gray-600 placeholder:text-sm py-1 bg-transparent text-white`}
        placeholder={`Enter your ${name}`}
      />
      {<span className="text-red-500 text-sm">{errors[name]?.message}</span>}
    </div>
  );
};

export default memo(FormInput);
