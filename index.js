const express = require("express");
const server = express();

server.use(express.json());

server.listen(8080, () => {
  console.log("\n*** Server Running on http://localhost:8080 ***\n")
})
