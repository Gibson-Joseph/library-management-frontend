import { arrowBack, arrowNext } from "../../../assets/Icons";
import Icon from "../Icon/Icon";

const Button = ({ btnType, btnName, className, handleClick }: any) => {
  return (
      <button
        onClick={() => handleClick()}
        type={btnType}
        className={className}
      >
        <span className="flex justify-center items-center">
          {btnName === "Back" && (
            <Icon iconName={arrowBack} className=" h-4 w-4 -z-0" />
          )}
          {btnName}
          {btnName === "Next" && (
            <Icon iconName={arrowNext} className=" h-6 w-6 -z-0" />
          )}
        </span>
      </button>
  );
};

export default Button;
