import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLaunchersByIdAPI } from "../api/axios";

export default function LauncherById() {
  const { id } = useParams();

  const [launcher, setLauncher] = useState(null);
  useEffect(() => {
    console.log(id);
    const fetchlauncherById = async () => {
      try {
        const res = await getLaunchersByIdAPI(id);
        setLauncher(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlauncherById();
  }, [id]);
  return (
    <div className="conteiner-Launcher">
      <div className="color-continer">
        <p>
          <strong>ID:</strong> {launcher?._id}
        </p>
        <p>
          <strong>Name:</strong> {launcher?.name}
        </p>
        <p>
          <strong>city:</strong> {launcher?.city}
        </p>
        <p>
          <strong>rocketType:</strong> {launcher?.rocketType}
        </p>
        <p>
          <strong>latitude:</strong> {launcher?.latitude}
        </p>
        <p>
          <strong>longitude:</strong> {launcher?.longitude}
        </p>
      </div>
    </div>
  );
}
