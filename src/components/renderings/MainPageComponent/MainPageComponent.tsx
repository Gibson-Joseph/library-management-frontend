import BooksCardComponent from "../../components/BooksCardComponent/BooksCardComponent";
import ContectPageComponent from "../../components/ContectPageComponent/ContectPageComponent";
const MainPageComponent = () => {
  const renderRows = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full h-screen bg-slate-800 scrollbar-hide overflow-y-scroll py-4">
      <h1 className="font-epilogue text-[22px] mx-3">Category</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderRows.map((item, index) => (
          <BooksCardComponent />
        ))}
      </div>
      {/* <ContectPageComponent /> */}
    </div>
  );
};

export default MainPageComponent;
