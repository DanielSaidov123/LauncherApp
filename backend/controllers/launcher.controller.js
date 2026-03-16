import { Launcher } from "../model/launcherTable.js";

export const AllLaunchers = async (req, res) => {
  try {
    const launchers = await Launcher.find();
    res.status(200).json(launchers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLaunchers = async (req, res) => {
  try {
    const { name, rocketType, latitude, longitude, city } = req.body;

    if (!name || !rocketType || !latitude || !longitude || !city) {
      return res.status(400).json({ message: "All fields are requierd" });
    }

    if (!["Shahab3", "Fetah110", "Radwan", "Kheibar"].includes(rocketType)) {
      return res.status(401).json({ message: "Invalid rocket Type" });
    }
    const launcher = await Launcher.create({
      name,
      rocketType,
      latitude,
      longitude,
      city,
    });

    res.status(200).json(launcher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getLauncherByID = async (req, res) => {
  try { 
    const id = req.params.id

     const launcher = await Launcher.findOne({_id : id})
    
     if (!launcher ) {
        return res.status(404).json({message : "Id is not found"})
     }
     
    res.status(200).json(launcher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const DeleteLauncherByID = async (req, res) => {
  try { 
    const id = req.params.id

     const launcher = await Launcher.findByIdAndDelete({_id : id})
    
     if (!launcher ) {
        return res.status(404).json({message : "Id is not found"})
     }

    res.status(200).json({message : "Launcher deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
