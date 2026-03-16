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
  const { addLaunchers, loading, error, message } = useLauncherStore();
  function hndelSubmit(e) {
    e.preventDefault();
    console.log(launcher);
    addLaunchers(launcher);
    setLauncher({
      name: "",
      city: "",
      rocketType: "Shahab3",
      latitude: "",
      longitude: "",
    });
  }
  return (
    <div className="contaner-form">
      <form onSubmit={hndelSubmit} className="form">
        <input
          type="text"
          placeholder="name"
          value={launcher.name}
          onChange={(e) => setLauncher({ ...launcher, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="city"
          value={launcher.city}
          onChange={(e) => setLauncher({ ...launcher, city: e.target.value })}
        />
        <input
          type="number"
          placeholder="latitude"
          value={launcher.latitude}
          onChange={(e) =>
            setLauncher({ ...launcher, latitude: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="longitude"
          value={launcher.longitude}
          onChange={(e) =>
            setLauncher({ ...launcher, longitude: e.target.value })
          }
        />
        <select
          name="rocketType"
          id="rocketType"
          value={launcher.rocketType}
          onChange={(e) =>
            setLauncher({ ...launcher, rocketType: e.target.value })
          }
        >
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <button type="submit">
          {loading ? <p>loading...</p> : <p>create</p>}
        </button>
        {message && <p className="message-true">launcher createed</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
