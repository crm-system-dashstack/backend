import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/registration", userController.registration);

router.get("/login", (req, res) => {
  res.send("User logged in");
});

router.get("/auth", (req, res) => {
  res.send("User is authenticated");
});

router.delete("/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});

export default router;
