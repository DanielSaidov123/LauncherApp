import React from "react";
import { useAuthStore } from "../store/authStote";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const {  loginUser, error, loading, message } = useAuthStore();
  const navigate = useNavigate();
  function hndelSubmit(e) {
    e.preventDefault();
    console.log(login);
    loginUser(login);
    if (!error) {
        setTimeout(()=>  navigate("/Home"),2000)
    }
  }
  return (
    <div className="contaner-form">
      <form onSubmit={hndelSubmit} className="form">
        <input
          type="text"
          placeholder="username"
          value={login.username}
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />

        <button type="submit">
          {loading ? <p>loading...</p> : <p>login</p>}
        </button>
        {message && <p className="message-true">login</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
