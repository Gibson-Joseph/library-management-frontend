import { memo } from "react";
import { useForm } from "react-hook-form";
import { useFormStateContext } from "../../../Provider/FormProvider";

import Button from "../../elements/Button/Button";
import FormInput from "../../elements/FormInput/FormInput";

const SignUp = () => {
  const {
    step,
    isSignIn,
    totalStep,
    setStep,
    onSubmit,
    setIsSignIn,
    handleClickPrev,
  } = useFormStateContext();

  const {
    reset,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      PhoneNo: "",
      LastName: "",
      Password: "",
      FirstName: "",
      Confirm_Password: "",
    },
  });

  const handleClickNext = async () => {
    const res = await trigger();
    if (res) {
      setStep(step + 1);
    }
  };

  const handleLogin = () => {
    reset();
    setIsSignIn(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <>
          <FormInput
            message="email is require"
            name="Email"
            register={register}
            errors={errors}
          />
          <FormInput
            message="password is require"
            name="Password"
            register={register}
            errors={errors}
          />
          <FormInput
            message="Password does not match"
            name="Confirm_Password"
            register={register}
            errors={errors}
          />
          <div>
            <button
              type="button"
              onClick={() => handleLogin()}
              className="text-blue-600 py-3 no-underline hover:underline"
            >
              Already have a account?
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <div>
          <FormInput
            message="firstName is require"
            name="FirstName"
            register={register}
            errors={errors}
          />
          <FormInput
            message="lastName is require"
            name="LastName"
            register={register}
            errors={errors}
          />
          <FormInput
            message="phone no is require"
            name="PhoneNo"
            register={register}
            errors={errors}
          />
        </div>
      )}
      <div
        className={`flex ${
          step !== totalStep && isSignIn ? "justify-end" : "justify-between"
        } mt-3 w-full`}
      >
        {(step > 1 || (!isSignIn && step === 1)) && (
          <Button
            btnType="Button"
            btnName="Back"
            handleClick={() => handleClickPrev()}
            className="text-cyan-500/90 border border-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-cyan-500/90 hover:scale-105 transition-all duration-300"
          />
        )}
        {step !== totalStep && isSignIn ? (
          <Button
            btnType="Button"
            btnName="Next"
            handleClick={() => handleClickNext()}
            className="text-cyan-500/90 border border-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-cyan-500/90 hover:scale-105 transition-all duration-300"
          />
        ) : (
          <button
            type="submit"
            className="bg-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-black/90 hover:scale-105 transition-all duration-300"
          >
            {isSignIn && <span className="font-epilogue">SignUp</span>}
          </button>
        )}
      </div>
    </form>
  );
};

export default memo(SignUp);
