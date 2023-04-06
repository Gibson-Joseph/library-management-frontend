import { useForm } from "react-hook-form";
import { useFormStateContext } from "../../../Provider/FormProvider";

import Button from "../../elements/Button/Button";
import FormInput from "../../elements/FormInput/FormInput";

export const Login = () => {
  const { onSubmit, handleClickPrev, setIsForgotPassword } =
    useFormStateContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center mb-3 mt-6 font-epilogue text-yellow-50">
        <p>Welcome Back</p>
      </div>
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

      <div className="flex justify-between mt-3 w-full">
        <Button
          btnType="Button"
          btnName={"Back to signUp"}
          handleClick={() => handleClickPrev()}
          className="text-cyan-500/90 border border-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-cyan-500/90 hover:scale-105 transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-cyan-500/90 py-1 px-5 rounded font-epilogue font-normal shadow-md hover:shadow-black/90 hover:scale-105 transition-all duration-300"
        >
          <span className="font-epilogue">Login</span>
        </button>
      </div>
    </form>
  );
};
