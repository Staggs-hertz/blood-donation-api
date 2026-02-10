import { Router } from "express";
import { getCompatibleDonors } from "./compatibility.js";

const bloodroutes = Router();

bloodroutes.get("/compatibility", (req, res) => {
  const { recipient } = req.query;
  console.log(recipient);
  if (!recipient) {
    return res.status(400).json({
      error: "recipient blood type is required",
    });
  }

  const compatibleDonors = getCompatibleDonors(recipient);

  if (!compatibleDonors.length) {
    res.status(400).json({ error: "invalid blood type" });
  }

  res.json({ recipient, compatibleDonors });
});

export default bloodroutes;
