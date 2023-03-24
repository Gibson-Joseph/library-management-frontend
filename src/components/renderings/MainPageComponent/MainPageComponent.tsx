import React from "react";
import BooksCardComponent from "../../components/BooksCardComponent/BooksCardComponent";
const MainPageComponent = () => {
  const renderRows = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full h-screen bg-slate-800 flex justify-center ">
      <div className="w-full p-3">
        <h1 className="text-center font-epilogue text-white">Book Lisks</h1>
        <table className="bg-slate-50 odd:bg-slate-600 w-full sm:w-2/3 shadow-2xl">
          <thead>
            <tr className="font-epilogue">
              <th className="text-start ">No</th>
              <th className="text-start ">Book Name</th>
              <th className="text-start ">Author</th>
              <th className="text-start ">Price</th>
            </tr>
          </thead>
          <tbody className="">
            {renderRows.map((_, index: number) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-slate-400 even:bg-slate-300 font-epilogue py-1 hover:bg-cyan-50 cursor-pointer"
                >
                  <td>1</td>
                  <td>JavaScript</td>
                  <td>Kathish</td>
                  <td>100</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPageComponent;
