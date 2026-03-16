import React from "react";
import AllLaunchers from "../components/AllLaunchers";
import SerchByName from "../components/SerchByName";

export function HomePage() {
  return (
    <div>
      <SerchByName />
      <AllLaunchers />
    </div>
  );
}
