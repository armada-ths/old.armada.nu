import React from "react";

export function QuerySetter(
  setBuilding,
  setButtonPressed,
  setFairLocation,
  fairLocationParam
) {
  console.log(fairLocationParam);
  if (fairLocationParam !== null) {
    if (fairLocationParam === "nymble_1") {
      setBuilding("Nymble");
      setButtonPressed(1);
      setFairLocation("Nymble - 1st Floor");
    } else if (fairLocationParam === "nymble_2") {
      setBuilding("Nymble");
      setButtonPressed(2);
      setFairLocation("Nymble - 2nd Floor");
    }
  } else if (fairLocationParam === "nymble_3") {
    setBuilding("Nymble");
    setButtonPressed(3);
    setFairLocation("Nymble - 3rd Floor");
  } else if (fairLocationParam === "library_1") {
    setBuilding("Library");
    setButtonPressed(2);
    setFairLocation("Library Main");
  } else if (fairLocationParam === "library_2") {
    setBuilding("Library");
    setButtonPressed(3);
    setFairLocation("Library Ångdomen");
  }
  return;
}
