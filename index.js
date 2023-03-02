const express = require("express");
const app = express();
const port = 4001;
const cors = require("cors");
const { connection } = require("./confing/db");
const { WordRoute } = require("./routes/random.routes");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/word", WordRoute);
app.listen(port, async () => {
  try {
    await connection;
    console.log("data base Connected");
  } catch (err) {
    console.log(err);
  }
  console.log("port is running on ", port);
});
