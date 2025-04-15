// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('MongoDB connected');
//   app.listen(5000, () => console.log('Server running on port 5000'));
// })
// .catch(err => console.error(err));



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config.js";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

mongoose.connect(config.mongoURI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(config.port, () => {
      console.log(`Server running on http://localhost:${config.port}`);
    });
  })
  .catch(err => console.error("MongoDB connection failed:", err));
