import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLaunchersByIdAPI } from "../api/axios";

export default function LauncherById() {
  const { id } = useParams();

  const [launcher ,setLauncher] = useState(null)
  useEffect(() => {
    console.log(id);
    const fetchlauncherById=async()=>{
       try {
         const res =await getLaunchersByIdAPI(id)
        setLauncher(res.data)
        } catch (error) {
        console.log(error)
       }

    }
    fetchlauncherById()
  }, [id]);
  return (
    <div>
      <div>
        <p>
          <strong>ID</strong> {launcher?._id}
          <strong>Name</strong> {launcher?.name}
          <strong>city</strong> {launcher?.city}
          <strong>rocketType</strong> {launcher?.rocketType}
          <strong>latitude</strong> {launcher?.latitude}
          <strong>longitude</strong> {launcher?.longitude}
        </p>
      </div>
    </div>
  );
}
