import { memo } from "react";

import Icon from "../../elements/Icon/Icon";
import SignUp from "./SignUp";

import { OTP } from "./OTP";
import { Login } from "./LogIn";
import { userIcon } from "../../../assets/Icons";
import { ForgotPassword } from "./ForgotPassword";
import { useFormStateContext } from "../../../Provider/FormProvider";

const SignInLayOut = () => {
  const { isSignIn, isForgotPassword, isOTP } = useFormStateContext();

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-slate-900 to-slate-700 ">
      <h1 className="text-[20px] sm:text-[30px] font-epilogue font-bold text-cyan-500/90 mb-10 p-2">
        Welcome to Library Management
      </h1>

      <div className=" w-[90%] sm:w-1/2 md:w-2/3 lg:w-1/3 p-4 rounded border-t relative border-t-slate-400 shadow-2xl shadow-indigo-500/25 ">
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
            ? !isOTP
              ? "Forgot Your Password"
              : "Verification"
            : "Login"}
        </h2>
        {isSignIn && !isForgotPassword && <SignUp />}
        {!isSignIn && !isForgotPassword && <Login />}
        {isForgotPassword && !isOTP && <ForgotPassword />}
        {isOTP && <OTP />}
      </div>
    </div>
  );
};

export default memo(SignInLayOut);
