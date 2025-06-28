import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [RidePopUpPanel, SetRidePopUpPanel] = useState(true);
  const [ConfirmRidePopupPanel, SetConfirmRidePopupPanel] = useState(false);
  const RidePopUpPanelRef = useRef(null);
  const ConfirmRidePopupPanelRef = useRef(null);

  useGSAP(function(){
    if(RidePopUpPanel){
      gsap.to(RidePopUpPanelRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(RidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [RidePopUpPanel])

  useGSAP(function(){
    if(ConfirmRidePopupPanel){
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [ConfirmRidePopupPanel])

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

      <div className="h-[60%]">
        <img
          className="h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber_map_png"
        />
      </div>

      <div>
        <CaptainDetails/>
      </div>

      <div ref={RidePopUpPanelRef} className="fixed w-full h-[80%] z-10 bottom-0 bg-white px-4 translate-y-full">
        <RidePopUp SetRidePopUpPanel={SetRidePopUpPanel} SetConfirmRidePopupPanel={SetConfirmRidePopupPanel}/>
      </div>

      <div ref={ConfirmRidePopupPanelRef} className="fixed w-full h-full z-10 bottom-0 bg-white px-4 translate-y-full">
        <ConfirmRidePopUp SetConfirmRidePopupPanel={SetConfirmRidePopupPanel} SetRidePopUpPanel={SetRidePopUpPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
