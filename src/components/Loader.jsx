import "./Loader.css";

const Loader = () => {
  return (
    <div className="ms_card grid grid-cols-1 place-items-center min-h-[500px] bg_dark p-2 relative  max-w-[30rem]  rounded-[1.5rem] bg-clip-border ms_text-white shadow-md mx-auto mt-8">
      <div className="loader size-20"></div>
    </div>
  );
};
export default Loader;
