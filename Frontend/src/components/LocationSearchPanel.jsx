import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {

  const locations = [
    "123 Main Street, Springfield, IL 62704",
    "12 Rue de Rivoli, 75001 Paris, France",
    "101 George Street, Sydney, NSW 2000, Australia",
    "101 George Street, Sydney, NSW 2000, Australia",
    "456 Park Avenue, New York, NY 10022"
  ]

  return (
    <div className="relative h-screen flex flex-col items-center">
      {/* temporary deta */}
      {locations.map((val, idx)=>{
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className="flex gap-3 justify-start items-center mt-2 border-2 rounded-lg p-3 bg-white active:border-black">
          <i className="ri-map-pin-2-line"></i>
          <h4 className="text-[16px] font-medium font-serif">
            {val}
          </h4>
        </div>
      })}
    </div>
  );
};

export default LocationSearchPanel;
