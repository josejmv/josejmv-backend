import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  const DB_CONFIG = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  const DB_URL = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_NAME}.${config.DB_HOST}/${config.DB_NAME}?retryWrites=true&w=majority`;

  await mongoose.connect(DB_URL, DB_CONFIG, (err) => {
    if (err) console.log("Error in database connection");
    else console.log(`Conected to ${config.DB_NAME} database`);
  });
})();
