// import express from express;
import express from "express";
import {
  registerUser,
  loginUser,
  currentUser,
} from "../Controller/UserController.js";
import protect from "../Middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", protect, currentUser);

export default router;
