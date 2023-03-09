const Button = ({ btnType, btnName, className, handleClick }: any) => {
  return (
    <>
      <button
        onClick={() => handleClick()}
        type={btnType}
        className={className}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
