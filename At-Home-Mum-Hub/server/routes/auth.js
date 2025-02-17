import express, { request } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { usersDb } from "../db/connection.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const secret = process.env.JWT_SECRET || "secret";

router.post("/signup", async (request, response) => {
  const { email, password, name, marketingPreferences } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    email,
    password: hashedPassword,
    name,
    marketingPreferences,
  };

  try {
    const collection = usersDb.collection("Users");
    await collection.insertOne(newUser);
    response.status(201).send("User created");
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating User");
  }
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const collection = usersDb.collection("Users");
    const user = await collection.findOne({ email });

    if (!user) return response.status(400).send("Invalid Email or Password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return response.status(400).send("Invalid Username or Password");

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
    const { password: _, ...userWithoutPassword } = user;
    response.json({ token, user: userWithoutPassword });
  } catch (error) {
    console.error(error);
    response.status(500).send("Error Logging in");
  }
});

router.get("/account", authMiddleware, async (request, response) => {
  try {
    const user = await usersDb
      .collection("Users")
      .findOne({ _id: req.user.id });
    response.send(user);
  } catch (error) {
    response.status(500).send("Error fetching user data");
  }
});

router.get("/me", authMiddleware, async (request, response) => {
  try {
    const user = await usersDb
      .collection("Users")
      .findOne({ _id: request.user.id });
    if (!user) {
      return response.status(404).send("User not found");
    }

    const { password, ...userWithoutPassword } = user;
    response.json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error fetching user data");
  }
});

export default router;
