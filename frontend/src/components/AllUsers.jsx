import React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStote";
import { useState } from "react";
import UpdataUsers from "./UpdataUsers";

export default function AllUsers() {
  const [editUser, setEditUser] = useState(null);

  const { users, loading, error, getAllusers, deleteUser } = useAuthStore();
  useEffect(() => {
    getAllusers();
  }, [getAllusers]);

  return (
    <>
      <div  >
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        <table className="table">
          <thead>
            <tr className="row">
              <th>id</th>
              <th>username</th>
              <th>user_type</th>
              <th>last_login</th>
              <th>email</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>Delete</th>
              <th>updat</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="row">
                <td>{u._id}</td>
                <td>{u.username}</td>
                <td className={`${u.user_type}`}>{u.user_type}</td>
                <td>{u.last_login}</td>
                <td>{u.email}</td>
                <td>{u.createdAt}</td>
                <td>{u.updatedAt}</td>
                <td>
                  <button className="delete" onClick={() => deleteUser(u._id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="updata"
                    onClick={() =>
                      setEditUser({
                        _id: u._id,
                        username: u.username,
                        email: u.email,
                        user_type: u.user_type,
                      })
                    }
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editUser && <UpdataUsers edit={editUser} setEdit={setEditUser} />}
    </>
  );
}
