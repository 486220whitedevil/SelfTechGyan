import express from "express";
const router = express.Router();
import sendEmail from "../utils/sendEmail.js";

// POST /api/callback
router.post("/", async (req, res) => {
  const { name, phone, message } = req.body;

  // test
  await sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: "📞 New Callback Request",
    text: `
Name: ${name}
Phone: ${phone}
Message: ${message || "N/A"}
    `,
  });

  res.json({ success: true });
});

export default router;
