import React, { useContext, createContext, useState, memo } from "react";
interface IFormState {
  step: number;
  setStep: (value: number) => void;
  totalStep: number;
}

const FormState = createContext({} as IFormState);

export const FormProvider = memo(({ children }: any) => {
  const [step, setStep] = useState<number>(1);
  const [totalStep] = useState<number>(2);
  return (
    <FormState.Provider value={{ step, setStep, totalStep }}>
      {children}
    </FormState.Provider>
  );
});

export const useFormStateContext = () => useContext(FormState);
