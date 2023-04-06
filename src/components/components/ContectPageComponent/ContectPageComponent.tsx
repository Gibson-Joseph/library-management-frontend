import { memo } from "react";

const ContectPageComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-[90px] w-1/4 border-l-[5px] border-l-red-600 bg-slate-400 p-3 m-4 flex flex-col justify-center">
        <p>
          <span>Name:</span>
          <span> Gibson Joseh</span>
        </p>
        <p>
          <span>PhoneNo: </span>
          <span>7904902106</span>
        </p>
      </div>
    </div>
  );
};

export default memo(ContectPageComponent);
