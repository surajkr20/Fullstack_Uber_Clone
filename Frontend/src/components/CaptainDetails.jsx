import React from 'react';
import captainImage from "../../public/ghibli.jpg";

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex justify-between items-center px-5 py-3">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-16"
              src={captainImage}
              alt="captain_img"
            />
            <div className="flex flex-col items-center">
              <h2 className="font-medium text-gray-900">Abhinav</h2>
              <h2 className="font-medium text-gray-900">Bhardwaaj</h2>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium"><i className="ri-money-rupee-circle-line"></i>245.55</h2>
            <h4 className="text-center font-serif">Earned</h4>
          </div>
        </div>

        <div className="text-center flex items-center justify-between bg-orange-300 rounded-md mx-5 py-3 px-3">
          <div className="text-center">
            <i className="text-3xl font-thin ri-timer-line"></i>
            <h5 className="text-xl">10.2</h5>
            <p className="text-xs font-medium">Hours online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-speed-up-line"></i>
            <h5 className="text-xl">10.2</h5>
            <p className="text-xs font-medium">Hours online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl font-thin ri-booklet-line"></i>
            <h5 className="text-xl">10.2</h5>
            <p className="text-xs font-medium">Hours online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails