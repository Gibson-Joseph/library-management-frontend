import { useForm } from "react-hook-form";
import { useFormStateContext } from "../../../Provider/FormProvider";

import Button from "../../elements/Button/Button";
import FormInput from "../../elements/FormInput/FormInput";

export const ForgotPassword = () => {
  const { handleClickPrev, isSetOTP } = useFormStateContext();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
    },
  });

  const handleOTP = async () => {
    const isError = await trigger();
    isError && isSetOTP(true);
  };

  return (
    <>
      <div className="text-center mb-3 mt-6 font-epilogue text-yellow-50">
        <p>Enter Your Email we will send you a OTP to </p>
        <p>reset your password</p>
      </div>
      <FormInput
        message="email is require"
        name="Email"
        register={register}
        errors={errors}
      />

      <div className="flex justify-between mt-3 w-full">
        <Button
          btnType="Button"
          btnName="Back to login"
          handleClick={() => handleClickPrev()}
          className="text-cyan-500/90 border border-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-cyan-500/90 hover:scale-105 transition-all duration-300"
        />
        <button
          onClick={() => handleOTP()}
          type="submit"
          className="bg-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-black/90 hover:scale-105 transition-all duration-300"
        >
          <span className="font-epilogue">Submit</span>
        </button>
      </div>
    </>
  );
};
