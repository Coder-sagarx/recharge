const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const Recharge = require("../models/Recharge");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Step 1: Create Razorpay order
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Amount in paisa
    currency: "INR",
    receipt: "receipt_order_" + Date.now(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order); // ✅ Send order back to frontend
  } catch (err) {
    console.error("Order creation failed:", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// ✅ Step 2: Save recharge after successful payment
router.post("/verify", async (req, res) => {
  const {
    number,
    provider,
    planId,
    amount,
    paymentId,
    orderId,
    userEmail,
  } = req.body;

  try {
    const newRecharge = new Recharge({
      number,
      provider,
      planId,
      amount,
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      userEmail,
      date: new Date(),
    });

    await newRecharge.save();
    res.json({ success: true, message: "Recharge saved successfully" });
  } catch (error) {
    console.error("Recharge save error:", error);
    res.status(500).json({ error: "Recharge save failed" });
  }
});

module.exports = router;
