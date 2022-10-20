import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const [numberOfDisplay, setnumberOfDisplay] = useState(1);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/displayimage/" + numberOfDisplay);
  };
  return (
    <div>
      {/* form input number of display */}
      <h1 className=" text-7xl font-semibold"> Setting </h1>
      <form>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-xs">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="numberOfDisplay"
                >
                  Number of display
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="numberOfDisplay"
                  type="number"
                  placeholder="Number of display"
                  onChange={(event) => {
                    setnumberOfDisplay(event.target.value);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleClick()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Setting;
