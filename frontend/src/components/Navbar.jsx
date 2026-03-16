import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>Launchers app</h1>
      <div>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/AddLauncher")}>Add Launcher</button>
      </div>
    </div>
  );
}
