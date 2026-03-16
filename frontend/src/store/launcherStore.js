import {create} from "zustand"
import {   createLaunchersAPI, getLaunchersAPI } from "../api/axios"


export const useLauncherStore = create((set,get)=>({
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
    },

    addLaunchers : async (data)=>{
        try {
            set({loading : true})
            const res= await createLaunchersAPI(data)
            console.log(res);
            set({launchers:[...get().launchers , res.data] , loading:false})
        } catch (error) {
            set({error :  error.message , loading:false })
        }
    }
    
}))