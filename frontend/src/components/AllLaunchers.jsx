import { useEffect } from "react"
import { useLauncherStore } from "../store/launcherStore"

export default function AllLaunchers() {
  
    const {launchers ,getLaunchers } = useLauncherStore()

    useEffect(()=>{
        getLaunchers()
    },[getLaunchers])
    console.log(launchers)
    return (
    <div>
       
    </div>
  )
}
