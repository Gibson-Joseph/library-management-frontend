import { memo, useState } from "react";
import { menuIcon, closeIcon } from "../../../assets/Icons";
import Button from "../../elements/Button/Button";
import Icon from "../../elements/Icon/Icon";
const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenuBar = () => {
    setShowMenu(!showMenu);
  };
console.log("showMenu",showMenu)
  const handleLogOut = () => {};
  return (
    <div className="sm:flex items-center bg-gradient-to-r from-slate-700 to-slate-800 flex-1 h-16 z-10 sticky top-0 border-b border-b-red-500">
      <div className="flex w-full h-full justify-between items-center px-3 sm:justify-center">
        <button
          onClick={() => handleShowMenuBar()}
          className="visible sm:hidden bg-gray-300/10 rounded-[10px] p-1"
        >
          <Icon
            iconName={showMenu ? closeIcon : menuIcon}
            className="h-8 w-8"
          />
        </button>
        <h1 className="text-white font-epilogue text-[20px] text-center sm:text-[22px] py-1 font-bold">
          Library Management
        </h1>
      </div>
      <nav className="sm:flex w-full sm:flex-1 sm:justify-end font-epilogue hidden">
        <ul className=" p-2 gap-8 text-white sm:flex">
          <li className="cursor-pointer font-semibold bg-indigo-500 bg-opacity-20 px-2 py-1 rounded-md">
            Contect
          </li>
          <li className="cursor-pointer font-semibold bg-indigo-500 bg-opacity-20 px-2 py-1 rounded-md">
            About
          </li>
          <li className="cursor-pointer font-semibold bg-indigo-500 bg-opacity-20 px-2 py-1 rounded-md">
            Profile
          </li>
        </ul>
      </nav>
      {/* mobile view */}
      <nav
        className={`${
          showMenu ? "animate-openMenu" : "animate-closeMenu"
        } bg-slate-800 w-full transition-all  duration-500  h-[175px] px-3 absolute  py-2 sm:animate-largeScreenClose border border-red-500`}
      >
        <ul className=" gap-8 text-black flex-col font-epilogue">
          <li
            onClick={() => handleShowMenuBar()}
            className="py-1 cursor-pointer font-semibold text-white"
          >
            Contect
          </li>
          <li
            onClick={() => handleShowMenuBar()}
            className="py-1 cursor-pointer font-semibold text-white"
          >
            About
          </li>
          <li
            onClick={() => handleShowMenuBar()}
            className="py-1 cursor-pointer font-semibold text-white"
          >
            Profile
          </li>
        </ul>
        <div className="h-1 border-b border-b-red-600 mb-2" />
        <Button
          btnType="button"
          btnName="LogOut"
          handleClick={handleLogOut}
          className="w-full font-semibold text-white rounded-[10px] py-2 bg-indigo-500 font-epilogue"
        />
      </nav>
    </div>
  );
};

export default memo(HeaderComponent);
