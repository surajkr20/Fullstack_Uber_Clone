import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [finishRidePanel])

  return (
    <div className="h-screen">
      <div className="w-full fixed flex items-center justify-between px-3">
        <img
          className="w-20"
          src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png"
          alt="uber_logo"
        />
        <Link
          to={"/captain-login"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-[80%]">
        <img
          className="h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber_map_png"
        />
      </div>

      <div className="w-full h-[20%] flex flex-col items-center gap-1 px-7 py-3 bg-yellow-300">
        <div>
          <h2 onClick={()=>{
            setFinishRidePanel(true)
          }}>
            <i className="text-2xl ri-arrow-up-wide-fill"></i>
          </h2>
        </div>
        <div className="w-full flex items-center justify-between">
          <h4 className="w-1/2 text-lg font-medium">4 KM Away</h4>
          <button  onClick={()=>{
            setFinishRidePanel(true)
          }} className="bg-green-700 text-orange-100 rounded-md font-medium py-2 text-lg text-center w-1/2">
            Complete Ride
          </button>
        </div>
      </div>

      <div ref={finishRidePanelRef} className="fixed w-full h-[80%] z-10 bottom-0 bg-white px-4 translate-y-full">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
