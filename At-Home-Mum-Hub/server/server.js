import express, { request, response } from "express";
import cors from "cors";
import clients from "./routes/clients.js";
import auth from "./routes/auth.js";
import items from "./routes/items.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/clients", clients);
app.use("/auth", auth);
app.use("/items", items);

app.get("/", (request, response) => {
  response.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
