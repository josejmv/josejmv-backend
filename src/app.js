import express from "express";
import cors from "cors";
import config from "./config.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
app.set("port", config.PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(messageRoutes);

export default app;
