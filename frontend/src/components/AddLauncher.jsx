import React from "react";
import { useState } from "react";
import { useLauncherStore } from "../store/launcherStore";

export default function AddLauncher() {
  const [launcher, setLauncher] = useState({
    name: "",
    city: "",
    rocketType: "Shahab3",
    latitude: "",
    longitude: "",
  });
  const {addLaunchers ,loading , error}=useLauncherStore()
  function hndelSubmit( e) {
    e.preventDefault()
    console.log(launcher)
    addLaunchers(launcher)
  }
  return (
    <div>
      <form onSubmit={hndelSubmit}>
        <input type="text" placeholder="name" onChange={(e)=>setLauncher({...launcher , name:e.target.value})}/>
        <input type="text" placeholder="city" onChange={(e)=>setLauncher({...launcher , city:e.target.value})}/>
        <input type="number" placeholder="latitude" onChange={(e)=>setLauncher({...launcher , latitude:e.target.value})}/>
        <input type="number" placeholder="longitude" onChange={(e)=>setLauncher({...launcher , longitude:e.target.value})}/>
        <select name="rocketType" id="rocketType" onChange={(e)=>setLauncher({...launcher , rocketType:e.target.value})}>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <button type="submit">{loading?<p>loading...</p>:<p>create</p>}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
