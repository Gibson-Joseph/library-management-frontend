const FooterComponent = () => {
  return (
    <div className="bg-slate-800 border-t border-t-red-500">
      <nav className="p-3">
        <ul className="text-white font-epilogue font-normal">
          <li className="font-epilogue text-[16px] py-1 text-white ">Book</li>
          <li className="font-epilogue text-[16px] py-1 text-white ">Note</li>
          <li className="font-epilogue text-[16px] py-1 text-white ">Pen</li>
          <li className="font-epilogue text-[16px] py-1 text-white ">
            Pencel
          </li>
        </ul>
      </nav>
      <div>
        <div className="h-1 w-[90%] m-auto border-b border-b-yellow-100 " />
        <h6 className="text-center font-epilogue text-[17px] p-3 text-red-500">
          @copyright-2023
        </h6>
      </div>
    </div>
  );
};

export default FooterComponent;
