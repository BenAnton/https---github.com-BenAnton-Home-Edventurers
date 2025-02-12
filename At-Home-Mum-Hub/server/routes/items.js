import express from "express";
import { itemsDb } from "../db/connection.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const collection = itemsDb.collection("Items");
    const items = await collection.find({}).toArray();
    response.json(items);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error fetching items");
  }
});

router.post("/", async (request, response) => {
  const newItem = request.body;

  try {
    const collection = itemsDb.collection("Items");
    await collection.insertOne(newItem);
    response.status(201).send("Item created");
  } catch (error) {
    console.error(error);
    response.status(500).send("Error creating item");
  }
});

export default router;
