
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const ConfirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(ConfirmRidePanelRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(ConfirmRidePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [waitingForDriver])

  return (
    <div className="fixed">
      <img
        className="w-20 absolute left-5 top-2"
        src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png"
        alt="uber_logo"
      />

      <div className="h-[70vh]">
        <img
          className="h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber_map_png"
        />
      </div>

      <div className="absolute w-full h-screen top-0 flex flex-col justify-end">
        <div className="bg-white h-[30%] p-5 relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-3 right-6 opacity-0 mt-2 font-bold"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line text-2xl"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line w-1 h-16 absolute bg-gray-900 left-8 mt-7"></div>
            <input
              type="text"
              placeholder="Add a pick-up location"
              className="w-full p-2 bg-[#eee] rounded-lg placeholder:text-base mt-2 text-center"
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter your Destination"
              className="w-full p-2 bg-[#eee] rounded-lg placeholder:text-base mt-3 text-center"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white px-7">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 z-10 w-full shadow-lg px-2 py-4 flex flex-col gap-2 translate-y-full bg-white"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} vehiclePanelRef={vehiclePanelRef} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      <div
        ref={ConfirmRidePanelRef}
        className="fixed bottom-0 z-10 w-full shadow-lg px-2 py-4 flex flex-col gap-2 translate-y-full bg-white"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} setVehicleFound={setVehicleFound}
        setWaitingForDriver={setWaitingForDriver}/>
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 z-10 w-full shadow-lg px-2 py-4 flex flex-col gap-2 translate-y-full bg-white"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed bottom-0 z-10 w-full shadow-lg px-2 py-4 flex flex-col gap-2 translate-y-full bg-white"
      >
        <WaitingForDriver setConfirmRidePanel={setConfirmRidePanel} setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
