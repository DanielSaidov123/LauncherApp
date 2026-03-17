import mongoose from "mongoose";

const launcherSchema = new mongoose.Schema({
  name: String,
  rocketType: {
    type: String,
    enum: ["Shahab3", "Fetah110", "Radwan", "Kheibar"],
  },
  city: String,
  longitude: Number,
  latitude: Number,
  destroyed:{
    type : Boolean,
    default:false
  }
});

export  const Launcher = mongoose.model("Launcher" , launcherSchema)