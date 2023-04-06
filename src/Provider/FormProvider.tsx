import React, { useContext, createContext, useState, memo } from "react";
interface IFormState {
  step: number;
  isOTP: boolean;
  isSignIn: boolean;
  totalStep: number;
  isForgotPassword: boolean;
  setStep: (value: number) => void;
  isSetOTP: (value: boolean) => void;
  onSubmit: (value: any) => void;
  setIsSignIn: (value: boolean) => void;
  handleClickPrev: () => void;
  setIsForgotPassword: (value: boolean) => void;
}

const FormState = createContext({} as IFormState);

export const FormProvider = memo(({ children }: any) => {
  const [totalStep] = useState<number>(2);

  const [step, setStep] = useState<number>(1);
  const [isOTP, isSetOTP] = useState(false);
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const handleClickPrev = () => {
    if (!isSignIn && !isForgotPassword) {
      setIsSignIn(true);
    } else if (isForgotPassword) {
      setIsForgotPassword(false);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <FormState.Provider
      value={{
        step,
        isOTP,
        isSignIn,
        totalStep,
        isForgotPassword,
        setStep,
        onSubmit,
        isSetOTP,
        setIsSignIn,
        handleClickPrev,
        setIsForgotPassword,
      }}
    >
      {children}
    </FormState.Provider>
  );
});

export const useFormStateContext = () => useContext(FormState);
