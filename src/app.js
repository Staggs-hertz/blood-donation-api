import express from "express";
import bloodroutes from "./modules/blood/bloodRoutes.js";

const app = express();

app.use("/api/blood", bloodroutes);

export default app;
