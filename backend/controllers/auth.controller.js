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
      pasword: hash,
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
    const passwordDeciphering = await bcrypt.compare(password, user.pasword);

    if (!passwordDeciphering) {
      return res.status(400).json({ message: "password is not good" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
