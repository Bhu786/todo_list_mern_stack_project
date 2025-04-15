import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
};
