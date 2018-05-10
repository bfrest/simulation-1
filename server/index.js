const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const massive = require("massive");
const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Server is runnin!");
});

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
