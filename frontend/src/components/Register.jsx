import { useState } from "react";
import { useAuthStore } from "../store/authStote"

export default function Register() {
  const [rgister, setRegister] = useState({
    username: "",
    password: "",
    email: "",
    user_type: "admin",
    last_login: "",
  });
  const { loading, error,rgisterUser ,message} = useAuthStore();
  function hndelSubmit(e) {
    e.preventDefault();
    console.log(rgister);
    rgisterUser(rgister);
    setRegister({
     username: "",
    password: "",
    email: "",
    user_type: "intel",
    last_login: "",
    });
  }
  return (
    <div className="contaner-form">
      <form onSubmit={hndelSubmit} className="form">
        <input
          type="text"
          placeholder="username"
          value={rgister.username}
          required
          onChange={(e) => setRegister({ ...rgister, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={rgister.password}
          required
          onChange={(e) => setRegister({ ...rgister, password: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          value={rgister.email}
          required
          onChange={(e) =>
            setRegister({ ...rgister, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="last_login"
          value={rgister.last_login}
          required
          onChange={(e) =>
            setRegister({ ...rgister, last_login: e.target.value })
          }
        />
        <select
          name="user_type"
          id="user_type"
          value={rgister.user_type}
          required
          onChange={(e) =>
            setRegister({ ...rgister, user_type: e.target.value })
          }
        >
          <option value="intel">intel</option>
          <option value="airforce">airforce</option>
          <option value="admin">admin</option>
        </select>
        <button type="submit">
          {loading ? <p>loading...</p> : <p>create</p>}
        </button>
        {message && <p className="message-true">user Created</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

