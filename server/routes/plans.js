const express = require("express");
const router = express.Router();

const plansData = {
  jio: [
    { id: 1, price: 239, validity: "28 days", data: "1.5GB/day" },
    { id: 2, price: 399, validity: "56 days", data: "1.5GB/day" },
    { id: 1, price: 299, validity: "28 days", data: "2GB/day" },
     { id: 4, price: 349, validity: " unlimited calls, 100 SMS/day, Apollo 24/7 Circle membership, free Hellotunes, valid for 28 days.s", data: "1.5GB/day" },
    { id: 5, price: 449, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes", data: "3GB/day" },
    { id: 6, price: 549, validity: "unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes,", data: "3GB/day" },
    { id: 7, price: 859, validity: " unlimited calls, 100 SMS/day, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "1.5GB/day" },
    { id: 8, price: 979, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (84 days), RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" },
    { id: 9, price: 1029, validity: " unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" }
 
  ],
  airtel: [
    { id: 1, price: 299, validity: "28 days", data: "2GB/day" },
    { id: 2, price: 399, validity: "56 days", data: "1.5GB/day" },
    { id: 3, price: 19, validity: "1 days", data: "1GB" },
    { id: 4, price: 349, validity: " unlimited calls, 100 SMS/day, Apollo 24/7 Circle membership, free Hellotunes, valid for 28 days.s", data: "1.5GB/day" },
    { id: 5, price: 449, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes", data: "3GB/day" },
    { id: 6, price: 549, validity: "unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes,", data: "3GB/day" },
    { id: 7, price: 859, validity: " unlimited calls, 100 SMS/day, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "1.5GB/day" },
    { id: 8, price: 979, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (84 days), RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" },
    { id: 9, price: 1029, validity: " unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" }
 
  ],
  vi: [
    { id: 1, price: 249, validity: "28 days", data: "1.5GB/day" },
    { id: 2, price: 399, validity: "56 days", data: "1.5GB/day" },
     { id: 4, price: 349, validity: " unlimited calls, 100 SMS/day, Apollo 24/7 Circle membership, free Hellotunes, valid for 28 days.s", data: "1.5GB/day" },
    { id: 5, price: 449, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes", data: "3GB/day" },
    { id: 6, price: 549, validity: "unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium (28 days), Apollo 24/7 Circle membership, free Hellotunes,", data: "3GB/day" },
    { id: 7, price: 859, validity: " unlimited calls, 100 SMS/day, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "1.5GB/day" },
    { id: 8, price: 979, validity: "unlimited calls, 100 SMS/day, unlimited 5G data, Xstream Play Premium (84 days), RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" },
    { id: 9, price: 1029, validity: " unlimited calls, 100 SMS/day, Disney+ Hotstar Mobile (3 months), Xstream Play Premium, RewardsMini Subscription, Apollo 24/7 Circle membership, free Hellotunes, valid for 84 days", data: "2GB/day" }
 
  ]
};

router.get("/:provider", (req, res) => {
  const provider = req.params.provider.toLowerCase();
  const plans = plansData[provider];
  if (!plans) {
    return res.status(404).json({ error: "Provider not found" });
  }
  res.json(plans);
});

module.exports = router;
