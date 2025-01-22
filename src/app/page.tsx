import React from "react";

import HelloNike from "./components/HelloNike";
import BestOfAirMax from "./components/BestOfAirMax";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Essentials from "./components/Essentials";
import Category from "./components/Category";

export default function page() {
  return (
    <div>
      <HelloNike />
      <BestOfAirMax />
      <Featured />
      <GearUp />
      <Essentials />
      <Category />
    </div>
  );
}
