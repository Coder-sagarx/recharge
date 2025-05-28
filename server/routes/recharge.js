const express = require("express");
const Recharge = require("../models/Recharge");

const router = express.Router();

// ✅ Save recharge info after payment success
router.post("/save", async (req, res) => {
  const {
    number,
    amount,
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    userEmail,
    provider,
    planId,
  } = req.body;

  if (!number || !amount || !userEmail || !provider) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const recharge = new Recharge({
      number,
      amount,
      userEmail,
      provider,
      planId,
      date: new Date(),
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    await recharge.save();
    console.log("✅ Recharge saved:", recharge);
    res.json({ message: "Recharge saved successfully" });
  } catch (error) {
    console.error("❌ Recharge Save Error:", error);
    res.status(500).json({ error: "Failed to save recharge" });
  }
});

// ✅ USER: Get recharge history by mobile number
router.get("/history", async (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Mobile number is required" });
  }

  try {
    const history = await Recharge.find({ number }).sort({ date: -1 });
    console.log(`📄 History for number ${number}:`, history.length);
    res.json(history);
  } catch (error) {
    console.error("❌ Error fetching history:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

// ✅ ADMIN: Get all recharge records
router.get("/all", async (req, res) => {
  try {
    const allRecharges = await Recharge.find().sort({ date: -1 });
    console.log("📊 Total recharges fetched:", allRecharges.length);
    res.json(allRecharges);
  } catch (error) {
    console.error("❌ Error fetching all recharges:", error);
    res.status(500).json({ error: "Failed to fetch all recharge records" });
  }
});

module.exports = router;
