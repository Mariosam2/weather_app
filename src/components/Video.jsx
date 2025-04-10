import clearSky from "../assets/clear-sky.mp4";
const Video = () => {
  return (
    <>
      <div className="video-container  fixed w-screen h-screen object-cover -z-20">
        <div className="layover"></div>
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={clearSky} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
