import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI || "";
if (!uri) {
  throw new Error("Missing ATLAS_URI");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged deployment, successful connection to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

connect();

const usersDb = client.db("Users");
const itemsDb = client.db("Items");

export { usersDb, itemsDb };
