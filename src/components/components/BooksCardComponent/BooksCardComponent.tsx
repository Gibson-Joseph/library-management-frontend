import React from "react";
import testBookImage from "../../../assets//images/testBook.jpeg";

const BooksCardComponent = () => {
  return (
    <div className="min-w-[190px] h-[16rem]  m-4 p-3 bg-white gap-5 rounded-[10px] shadow-indigo-500/40 shadow-xl hover:scale-105 duration-500 transition-all">
      <div className="w-full h-1/2 flex flex-col items-center">
        <div className="h-full">
          <img src={testBookImage} alt="test" className="h-full"/>
          <h2>Book Name</h2>
        </div>
      </div>
      <div className="bg-red-500 h-1/2">
        <h1>Book Details</h1>
      </div>
    </div>
  );
};

export default BooksCardComponent;
