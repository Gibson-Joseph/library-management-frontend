import React from "react";
import { useFormStateContext } from "../../../Provider/FormProvider";
const StepperComponent = () => {
  const { step, totalStep } = useFormStateContext();
  return (
    <>
      <div className="flex sm:flex-col justify-center items-center">
        <div className="rounded-full h-8 w-8 bg-indigo-600 flex justify-center items-center">
          <span>1</span>
        </div>
        <div className="sm:h-32 h-4 sm:w-4 w-32 bg-slate-900"></div>
        <div className="rounded-full h-8 w-8 bg-indigo-600 flex justify-center items-center">
          <span>2</span>
        </div>
      </div>
    </>
  );
};

export default StepperComponent;
