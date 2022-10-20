import React from "react";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className=" text-7xl font-semibold"> list of image </h1>
      {/* Show images in a grid  */}
      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={() => {
            // change dinamicly the url
            navigate("/display/1");
          }}
        >
          <img
            // scr image
            src="https://picsum.photos/200/200"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            // change dinamicly the url
            navigate("/display/1");
          }}
        >
          <img
            // scr image
            src="https://picsum.photos/200/200"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            // change dinamicly the url
            navigate("/display/1");
          }}
        >
          <img
            // scr image
            src="https://picsum.photos/200/200"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            // change dinamicly the url
            navigate("/display/1");
          }}
        >
          <img
            // scr image
            src="https://picsum.photos/200/200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
