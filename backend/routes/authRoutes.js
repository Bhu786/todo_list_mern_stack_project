import express from "express";
import { register, login } from "../controllers/authController.js";
import { body } from "express-validator";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post("/register",
  body("email").isEmail().withMessage("Invalid email"),
  body("username").notEmpty().withMessage("Username is required"),
  body("password").isLength({ min: 8 }).withMessage("Password must be 8+ characters"),
  validate,
  register
);

router.post("/login",
  body("identifier").notEmpty(),
  body("password").notEmpty(),
  validate,
  login
);

export default router;
