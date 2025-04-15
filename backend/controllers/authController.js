import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) return res.status(400).json({ message: "Email or username already in use" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: "1d" });
  res.json({ token, user: { id: user._id, email: user.email, username: user.username } });
};
