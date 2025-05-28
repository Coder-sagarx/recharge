const mongoose = require("mongoose");

const RechargeSchema = new mongoose.Schema({
  number: String,
  provider: String,
  planId: Number,
  amount: Number,
  razorpay_payment_id: String,
  razorpay_order_id: String,
  userEmail: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recharge", RechargeSchema);
