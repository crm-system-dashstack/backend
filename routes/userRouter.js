import { Router } from "express";

const router = Router();

router.post("/registration", (req, res) => {
  res.send("User registered");
});

router.post("/login", (req, res) => {
  res.send("User logged in");
});

router.get("/auth", (req, res) => {
  res.send("User is authenticated");
});

router.delete("/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});

export default router;
