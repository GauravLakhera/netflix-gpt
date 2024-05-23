import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <>
      <div className="absolute w-screen aspect-video bg-gradient-to-b text-white from-black">
        <div className=" py-[15%] px-[5%] w-5/12 ">
          <h1 className="font-semibold text-5xl p-2">{title}</h1>
          <h1 className="font-raleway p-2 text-lg">{description}</h1>
          <div className="flex m-2 text-black">
            <button className="p-3 border rounded-lg bg-gray-100">
              Play Now
            </button>
            <button className="p-3 border rounded-lg bg-gray-100 ml-1">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
