import { User } from "../model/userTable.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const rgister = async (req, res) => {
  try {
    const { username, password, email, user_type } = req.body;

    if (!username || !password || !email || !user_type) {
      return res.status(400).json({ message: "All fields are requierd" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(401).json({ message: "username is unique" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hash,
      email,
      user_type,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are requierd" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "username is not found" });
    }
    const passwordDeciphering = await bcrypt.compare(password, user.password);
    const last_login = new Date();

    await User.findByIdAndUpdate(user._id, { $set: { last_login } });
    if (!passwordDeciphering) {
      return res.status(400).json({ message: "password is not good" });
    }
    const token = jwt.sign(
      { id: user._id, user_type: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const upload = req.body;

    if (upload.password) {
      upload.password = await bcrypt.hash(upload.password, 10);
    }
    console.log(id);
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        username: upload.username,
        password: upload.password,
        email: upload.email,
        user_type: upload.user_type,
      },
      { new: true },
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "userisnot found" });
    }
    res.status(200).json({ message: "user deleted ", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    console.log(req.user);
    if (!req.user) {
      return res.status(401).json({ message: "Not login in" });
    }
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "user is not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
