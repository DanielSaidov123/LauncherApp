import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStote";

export default function Navbar() {
  const navigate = useNavigate();
  const {user, logout} = useAuthStore();

  const showInfo = () => {
    if (user) {
      alert(`User: ${user.user?.username}  Role: ${user.user?.user_type}`);
    }
  };

  return (
    <div className="navbar">
      <h1>Launchers app</h1>
      <div>
        <button onClick={() => navigate("/Home")}>Home</button>
        
        {user && (
          <>
            <button onClick={showInfo}>Who Am I?</button>
            <button onClick={() => navigate("/AddLauncher")}>Add Launcher</button>
            <button onClick={() => { logout()  }}>Logout</button>
            
            {user.user?.user_type === "admin" && (
              <button onClick={() => navigate("/allusers")}>All users</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}