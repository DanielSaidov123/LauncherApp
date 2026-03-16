import { useLauncherStore } from "../store/launcherStore"

export default function UpdateLauncher({edit ,setEdit }) {
    const { loading ,error } = useLauncherStore()

    const {updateLauncher ,message} = useLauncherStore()
  return (
    <div className="contaner-form">
      <form onSubmit={()=>{updateLauncher(edit._id , edit)}} className="form">
        <input
          type="text"
          placeholder="name"
          value={edit.name}
          onChange={(e) => setEdit({ ...edit, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="city"
          value={edit.city}
          onChange={(e) => setEdit({ ...edit, city: e.target.value })}
        />
        <input
          type="number"
          placeholder="latitude"
          value={edit.latitude}
          onChange={(e) =>
            edit({ ...edit, latitude: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="longitude"
          value={edit.longitude}
          onChange={(e) =>
            setEdit({ ...edit, longitude: e.target.value })
          }
        />
        <select
          name="rocketType"
          id="rocketType"
          value={edit.rocketType}
          onChange={(e) =>
            setEdit({ ...edit, rocketType: e.target.value })
          }
        >
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <button type="submit">
          {loading ? <p>loading...</p> : <p>Update</p>}
        </button>
        {message && <p className="message-true">launcher createed</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
