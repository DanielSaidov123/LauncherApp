import { useEffect, useState } from "react"
import { useLauncherStore } from "../store/launcherStore"
import { useNavigate } from "react-router-dom"
import UpdateLauncher from "./UpdateLauncher"

export default function AllLaunchers() {
  
    const {getLaunchers ,loading ,error ,filterLaunchers ,setSerce,setRocket,deleteLauncher } = useLauncherStore()
    const [editLauncher ,setEditLauncher] = useState(null)
    const navigate = useNavigate()
    console.log(editLauncher)
  
    useEffect(()=>{
        getLaunchers()
    },[getLaunchers])
    return (
    <>
        
    <div className="contaner">
        <input type="text" placeholder="Serch By city" onChange={(e)=>setSerce(e.target.value)}/>
        <select name="rocketType" id="rocketType" onChange={(e)=>setRocket(e.target.value)}>
            <option value="">Rockets</option>
            <option value="Shahab3">Shahab3</option>
            <option value="Fetah110">Fetah110</option>
            <option value="Radwan">Radwan</option>
            <option value="Kheibar">Kheibar</option>
        </select>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
       <table className="table">
        <thead>
            <tr className="row"> 
                <th>id</th>
                <th>city</th>
                <th>rocketType</th>
                <th>Details</th>
                <th>Delete</th>
                <th>update</th>
            </tr>
        </thead>

        <tbody>
           {filterLaunchers().map((l)=>(
             <tr key={l._id} className="row">
                <td>{l._id}</td>
                <td>{l.city}</td>
                <td className={`${l.rocketType}`}>{l.rocketType}</td>
                <td><button className="Details" onClick={()=>navigate(`/launcher/${l._id}`)}>Details</button></td>
                <td><button className="delete" onClick={()=>deleteLauncher(l._id)}>Delete</button></td>
                <td><button className="updata" onClick={()=>setEditLauncher({_id:l._id ,name: l.name ,city: l.city,rocketType: l.rocketType ,latitude: l.latitude,longitude:l.longitude})}>update</button></td>
            </tr>
           ))}
        </tbody>
          
       </table>
       
    </div>
     {editLauncher && <UpdateLauncher edit={editLauncher} setEdit={setEditLauncher}/> }
</>    
  )
}
