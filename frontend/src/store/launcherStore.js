import {create} from "zustand"
import {   getLaunchersAPI } from "../api/axios"


export const useLauncherStore = create((set)=>({
    launchers :[],
    loading : false,
    error : null,

    getLaunchers : async ()=>{
        try {
            set({loading : true})
            const res= await getLaunchersAPI()

            set({launchers : res.data, loading : false})
        } catch (error) {
            set({error :  error.message , loading:false })
        }
    }
}))