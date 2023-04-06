import { useForm } from "react-hook-form";
import { useFormStateContext } from "../../../Provider/FormProvider";

export const OTP = () => {
  const { onSubmit } = useFormStateContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "1st": null,
      "2nd": null,
      "3rd": null,
      "4th": null,
    },
  });

  const OtpInput = ({ message, name, errors, register }: any) => {
    return (
      <input
        {...register(name, {
          required: { value: true, message: message },
        })}
        autoComplete="off"
        type="text"
        className={` ${
          errors[name]?.message &&
          Object.keys(errors)[0] === errors[name]?.message &&
          "border-red-500"
        } border w-1/6 py-2 text-center font-epilogue text-xl px-2 rounded focus:outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent text-white`}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center mb-3 mt-6 font-epilogue text-yellow-50">
        <p>Enter the verification coed we just send you</p>
        <p>on your email address</p>
      </div>
      <div className="flex justify-around w-full">
        <OtpInput
          message="1st"
          name="1st"
          register={register}
          errors={errors}
        />
        <OtpInput
          message="2nd"
          name="2nd"
          register={register}
          errors={errors}
        />
        <OtpInput
          message="3rd"
          name="3rd"
          register={register}
          errors={errors}
        />
        <OtpInput
          message="4th"
          name="4th"
          register={register}
          errors={errors}
        />
      </div>
      <div className="text-center my-4">
        {Object.keys(errors)[0] && (
          <span className="text-red-500 text-sm text-center">
            You are missing the {Object.keys(errors)[0]} digit number
          </span>
        )}
      </div>
      <div className="text-center my-4">
        <span className="text-slate-400">If you didn't recevie the OTP!</span>{" "}
        <span className="text-red-400 hover:underline hover:cursor-pointer">
          <strong>Resend</strong>
        </span>
      </div>
      <div className="flex justify-center my-3 w-full">
        <button
          type="submit"
          className="bg-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-black/90 hover:scale-105 transition-all duration-300"
        >
          <span className="font-epilogue">Verify</span>
        </button>
      </div>
    </form>
  );
};
