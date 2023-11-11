import React, { useState } from "react";
import "./index.scss";

const BuildingSwitch = ({
  setFairLocation,
  setBuilding,
  building,
  setButtonPressed,
}) => {
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
          setButtonPressed(2);
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
          setButtonPressed(2);
        }}
      >
        Library
      </div>
    </div>
  );
};

export default BuildingSwitch;
