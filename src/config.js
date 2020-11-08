import dotenv from "dotenv";
dotenv.config();

export default {
  DB_HOST: process.env.HOST || "ihv4k.mongodb.net",
  DB_NAME: process.env.DB || "JoseJMV-DB",
  DB_USERNAME: process.env.USER || "josejmv",
  DB_PASSWORD: process.env.PASSWORD || "Dzpl9ACP6ou0uWf0",
  PORT: process.env.PORT || 3000,
};
