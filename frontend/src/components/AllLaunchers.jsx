import { useEffect } from "react"
import { useLauncherStore } from "../store/launcherStore"
import { useNavigate } from "react-router-dom"

export default function AllLaunchers() {
  
    const {launchers ,getLaunchers ,loading ,error} = useLauncherStore()
    const navigate = useNavigate()
    useEffect(()=>{
        getLaunchers()
    },[getLaunchers])
    return (
    <div className="contaner">
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
       <table className="table">
        <thead>
            <tr className="row"> 
                <th>id</th>
                <th>name</th>
                <th>city</th>
                <th>rocketType</th>
                <th>latitude</th>
                <th>longitude</th>
            </tr>
        </thead>

        <tbody>
           {launchers.map((l)=>(
             <tr key={l._id} className="row">
                <td>{l._id}</td>
                <td>{l.name}</td>
                <td>{l.city}</td>
                <td>{l.rocketType}</td>
                <td>{l.latitude}</td>
                <td>{l.longitude}</td>
                <td><button onClick={()=>navigate(`/launcher/${l._id}`)}>Details</button></td>
            </tr>
           ))}
        </tbody>

       </table>
    </div>
  )
}
