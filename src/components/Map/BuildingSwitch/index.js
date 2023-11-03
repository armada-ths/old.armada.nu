import React, { useState } from "react";
import "./index.scss";

const BuildingSwitch = ({ setFairLocation, setBuilding, building }) => {
  return (
    <div className="buildingSwitchContainer">
      <div
        className={
          "buildingSwitch" + (building === "Nymble" ? " activeBuilding" : "")
        }
        id="nymble"
        onClick={() => {
          setBuilding("Nymble");
          setFairLocation("Nymble - 2nd Floor");
        }}
      >
        Nymble
      </div>
      <div
        className={
          "buildingSwitch" + (building === "Library" ? " activeBuilding" : "")
        }
        id="library"
        onClick={() => {
          setBuilding("Library");
          setFairLocation("Library Main");
        }}
      >
        Library
      </div>
    </div>
  );
};

export default BuildingSwitch;
