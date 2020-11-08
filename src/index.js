import app from "./app.js";
import "./database.js"

const running = () => {
  console.log(`server runing at http://localhost:${app.get("port")}`);
};
 
app.listen(app.get("port"), running);
