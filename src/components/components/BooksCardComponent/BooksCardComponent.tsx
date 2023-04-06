import React, { memo } from "react";
import testBookImage from "../../../assets//images/testBook.jpg";

const BooksCardComponent = () => {
  return (
    <div className="min-w-[190px] h-[20rem] cursor-pointer m-3 bg-slate-700 rounded-[10px] shadow-indigo-900/40 shadow-xl hover:scale-105 duration-500 transition-all">
      <div className="w-full h-1/2 flex flex-col items-center">
        <div className="h-full w-full">
          <img
            src={testBookImage}
            alt="test"
            className="h-full w-full object-cover rounded-t-[10px]"
          />
        </div>
      </div>
      <div className="h-1/2 px-3">
        <span className="text-[#e0e0d9]">Book Name</span>
        <div className="h-[80%]">
          <h1>Book Details</h1>
        </div>
      </div>
    </div>
  );
};

export default memo(BooksCardComponent);
