const express = require("express");
const postRouter = require("./routers/posts");

const server = express();

server.use(express.json());
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
    res.json({ message: "Welcome to the Posts API"})
})

server.listen(8080, () => {
  console.log("\n*** Server Running on http://localhost:8080 ***\n")
})
