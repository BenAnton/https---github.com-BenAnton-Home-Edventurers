import express, { request, response } from "express";
import cors from "cors";
import clients from "./routes/clients.js";
import auth from "./routes/auth.js";
import items from "./routes/items.js";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New Client Connected");

  socket.on("send message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

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

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
