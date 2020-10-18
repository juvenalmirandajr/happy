import express from "express";

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  return res.json({ message: "Hi" });
});

app.listen(3333);
