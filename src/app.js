import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "Blood Donation API running" });
});

export default app;
