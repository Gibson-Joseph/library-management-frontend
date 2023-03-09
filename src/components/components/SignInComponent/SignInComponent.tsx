import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../elements/Button/Button";
import Icon from "../../elements/Icon/Icon";
import Input from "../../elements/FormInput/FormInput";
import { userIcon } from "../../../assets/Icons";
import { memo } from "react";
import FormInput from "../../elements/FormInput/FormInput";
import { useFormStateContext } from "../../../Provider/FormProvider";
import StepperComponent from "./StepperComponent";
const SignInComponent = () => {
  const { setStep, step, totalStep } = useFormStateContext();

  const {
    handleSubmit,
    register,
    trigger,
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
  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const handleClickNext = async () => {
    const res = await trigger();
    if (res) {
      setStep(step + 1);
    }
  };
  const handleClickPrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-full bg-gradient-to-r from-slate-900 to-slate-700 ">
      {/* <div className="mt-3 mb-6 sm:mb sm:mt-0 sm:mr-20">
        <StepperComponent />
      </div> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full sm:w-1/2 lg:w-1/3 p-4 sm:rounded border-t relative border-t-slate-400 sm:shadow-2xl sm:shadow-indigo-500/25"
      >
        <div className="flex justify-center items-center absolute -top-8 left-[45%]">
          <Icon
            iconName={userIcon}
            className="rounded-full border h-14 w-14 bg-slate-400 -z-0"
          />
        </div>
        <h1 className="text-center font-medium mt-2 font-epilogue text-[22px] bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
          Wellcome
          <br />
          to Library Management
        </h1>
        {step === 1 && (
          <div>
            <FormInput name="Email" register={register} errors={errors} />
            <FormInput name="Password" register={register} errors={errors} />
            <FormInput
              name="Confirm_Password"
              register={register}
              errors={errors}
            />
            <div>
              <button
                type="button"
                className="text-blue-600 underline py-3 hover:underline"
              >
                Already have aaccount?
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <FormInput name="FirstName" register={register} errors={errors} />
            <FormInput name="LastName" register={register} errors={errors} />
            <FormInput name="PhoneNo" register={register} errors={errors} />
          </div>
        )}
        <div className="flex justify-between mt-3 w-full">
          {step > 1 && (
            <Button
              btnType="Button"
              btnName="Back"
              handleClick={() => handleClickPrev()}
              className="bg-red-500 py-1 px-5 rounded font-epilogue font-normal  "
            />
          )}
          {step !== totalStep ? (
            <Button
              btnType="Button"
              btnName="Next"
              handleClick={() => handleClickNext()}
              className="bg-red-500 py-1 px-5 rounded font-epilogue font-normal "
            />
          ) : (
            <button
              type="submit"
              className="bg-indigo-500 py-1 px-5 rounded font-epilogue font-normal "
            >
              SignUp
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default memo(SignInComponent);
