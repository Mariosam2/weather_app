import ThunderStorm from "../assets/thunderstorm.png";

const ErrorComponent = () => {
  return (
    <div className="ms_card grid grid-cols-1 place-items-center min-h-[500px] bg_dark p-2 relative  max-w-[30rem]  rounded-[1.5rem] bg-clip-border ms_text-white shadow-md mx-auto mt-8">
      <img className="max-w-[200px]" src={ThunderStorm} alt="" />
      <div className="content flex flex-col justify-center items-center mb-auto">
        <h1 className="ms_text-white ms_err-msg">404</h1>
        <span className="text-gray-300 uppercase font-semibold">
          page not found
        </span>
      </div>
    </div>
  );
};

export default ErrorComponent;
