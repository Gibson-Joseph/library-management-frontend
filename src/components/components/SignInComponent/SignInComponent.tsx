import Icon from "../../elements/Icon/Icon";
import Button from "../../elements/Button/Button";
import FormInput from "../../elements/FormInput/FormInput";
import StepperComponent from "./StepperComponent";

import { useForm } from "react-hook-form";
import { userIcon } from "../../../assets/Icons";
import { useState, memo } from "react";
import { useFormStateContext } from "../../../Provider/FormProvider";

interface IUserData {
  Email?: string;
  Password?: string | number;
  Confirm_Password?: string | number;
  FirstName?: string;
  LastName?: string;
  PhoneNo?: number | string;
}

const SignInComponent = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const { setStep, step, totalStep } = useFormStateContext();
  const {
    handleSubmit,
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
      Confirm_Password: "",
      FirstName: "",
      LastName: "",
      PhoneNo: "",
    },
  });

  const onSubmit = (data: IUserData) => {
    console.log("data", data);
  };

  const handleClickNext = async () => {
    const res = await trigger();
    if (res) {
      setStep(step + 1);
    }
  };

  const handleClickPrev = () => {
    // reset();
    if (!isSignIn && !isForgotPassword) {
      setIsSignIn(true);
    } else if (isForgotPassword) {
      setIsForgotPassword(false);
    } else {
      setStep(step - 1);
    }
  };

  const Login = memo(() => {
    return (
      <div>
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
        <button
          type="button"
          onClick={() => {
            setIsForgotPassword(true);
          }}
          className="text-blue-600 py-3 no-underline hover:underline"
        >
          Forgot password
        </button>
      </div>
    );
  });

  const ForgotPassword = memo(() => {
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
      </>
    );
  });

  const handleLogin = () => {
    reset();
    setIsSignIn(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-slate-900 to-slate-700 ">
      <h1 className="text-[20px] sm:text-[30px] font-epilogue font-bold text-cyan-500/90 mb-10 p-2">
        Welcome to Library Management
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[90%] sm:w-1/2 md:w-2/3 lg:w-1/3 p-4 rounded border-t relative border-t-slate-400 shadow-2xl shadow-indigo-500/25 "
      >
        <div className="flex justify-center items-center absolute -top-8 left-[45%]">
          <Icon
            iconName={userIcon}
            className="rounded-full border h-14 w-14 bg-slate-400 -z-0"
          />
        </div>

        <h2 className="text-center font-semibold mt-4 font-epilogue text-[22px] bg-gradient-to-r from-cyan-100 to-cyan-900 bg-clip-text text-transparent">
          {isSignIn
            ? "SignUp"
            : isForgotPassword
            ? "Forgot Your Password"
            : "Login"}
        </h2>
        {isSignIn && !isForgotPassword && (
          <>
            {step === 1 && (
              <div>
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
                  message="Confirm_Password is require"
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
              </div>
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
          </>
        )}

        {!isSignIn && !isForgotPassword && <Login />}
        {isForgotPassword && <ForgotPassword />}
        <div className="flex justify-between mt-3 w-full">
          {(step > 1 || (!isSignIn && step === 1)) && (
            <Button
              btnType="Button"
              btnName={isForgotPassword ? "Back to login" : "Back"}
              handleClick={() => handleClickPrev()}
              className="bg-rose-600 py-1 px-5 rounded font-epilogue font-normal "
            />
          )}

          {step !== totalStep && isSignIn ? (
            <Button
              btnType="Button"
              btnName="Next"
              handleClick={() => handleClickNext()}
              className="bg-rose-600 py-1 px-5 rounded font-epilogue font-normal shadow-inner"
            />
          ) : (
            <button
              type="submit"
              className="bg-indigo-600 py-1 px-5 rounded font-epilogue font-normal "
            >
              {isSignIn ? (
                <span className="font-epilogue">SignUp</span>
              ) : isForgotPassword ? (
                <span className="font-epilogue">Submit</span>
              ) : (
                <span className="font-epilogue">Login</span>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default memo(SignInComponent);
