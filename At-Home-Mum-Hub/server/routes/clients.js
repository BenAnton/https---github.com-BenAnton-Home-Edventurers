import express from "express";
import { usersDb } from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (request, response) => {
  let collection = await usersDb.collection("Clients");
  let results = await collection.find({}).toArray();
  response.send(results).status(200);
});

router.get("/:id", async (request, response) => {
  let collection = await usersDb.collection("Clients");
  let query = { _id: new ObjectId(request.params.id) };
  let results = await collection.findOne(query);

  if (!results) response.send("Not Found").status(404);
  else responst.send(result).status(200);
});

router.post("/", async (request, response) => {
  try {
    let newClient = {
      name: request.body.name,
      email: request.body.email,
      marketingPref: request.body.marketingPref,
    };
    let collection = await usersDb.collection("Clients");
    let result = await collection.insertOne(newClient);
    response.send(result).status(204);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error adding client");
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const query = { _id: new ObjectId(request.params.id) };
    const updates = {
      $set: {
        name: request.body.name,
        email: request.body.email,
        marketingPref: request.body.marketingPref,
      },
    };

    let collection = await usersDb.collection("Clients");
    let result = await collection.updateOne(query, updates);
    response.send(result).status(200);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error updating client");
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const query = { _id: new ObjectId(request.params.id) };

    const collection = usersDb.collection("Clients");
    let result = await collection.deleteOne(query);

    response.send(result).status(200);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error deleting record");
  }
});

export default router;
