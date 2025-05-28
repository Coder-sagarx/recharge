const express = require("express");
const router = express.Router();
const Recharge = require("../models/Recharge");

// Dummy admin check (In production, use session/auth middleware)
const ADMIN_EMAIL = "admin@example.com";

router.get("/recharges", async (req, res) => {
  const { email } = req.query;

  if (email !== ADMIN_EMAIL) {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    const allRecharges = await Recharge.find({});
    res.json(allRecharges);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recharge history" });
  }
});

module.exports = router;
