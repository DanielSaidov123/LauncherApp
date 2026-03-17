import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  pasword: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  user_type :{
    type: String,
    enum :["intal" , "airforce" , "admin"],
    require :true
  },
    last_login:{
        type : Date,
        default :null
    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema);
