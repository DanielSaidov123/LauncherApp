import React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStote";

export default function AllUsers() {
  const { users, loading, error, getAllusers } = useAuthStore();
  useEffect(() => {
    getAllusers();
  }, [getAllusers]);

  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <table className="table">
        <thead>
          <tr className="row">
            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th>user_type</th>
            <th>last_login</th>
            <th>createdAt</th>
            <th>updatedAt</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="row">
              <td>{u._id}</td>
              <td>{u.username}</td>
              <td>{u.password}</td>
              <td className={`${u.user_type}`}>{u.user_type}</td>
              <td>{u.last_login}</td>
              <td>{u.createdAt}</td>
              <td>{u.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
