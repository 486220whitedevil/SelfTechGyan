import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Callback from "../models/Callback.js";


const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  
  const { username, email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  
  if (existingUser) {
  
    return res.status(400).json({ error: "Email already registered" });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
 

  try {
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    
    await user.save();
    console.log("user saved")
    
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Save Error " , err)
    res.status(400).json({ error: "Email already exists" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });

   if (!user || user.role !== "user") {
    return res.status(401).json({ message: "Invalid user login" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign(
    { id: user._id , role: "user" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ 
    token, 
    user: {
      username: user.username,
      email: user.email
    } });
});

// Admin login without registration

router.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // 🔐 FIXED ADMIN
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, role: "admin" });
});





router.post("/", async (req, res) => {
  const { name, phone, message } = req.body;

  // Save in DB
  await Callback.create({ name, phone, message });

  // Send email to admin
  await sendEmail({
    subject: "📞 New Callback Request",
    text: `Name: ${name}
Phone: ${phone}
Message: ${message || "N/A"}`,
  });

  res.json({ success: true });
});








export default router;
