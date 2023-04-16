const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
router.use(express.json());

router.post("/api/register", async (req, res) => {
  const { displayName, email, password } = req.body;

  try {
    if (!displayName || !email || !password) {
      return res.json("All fields are required.");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json("This email is already registered.");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        displayName,
        email,
        password: hashedPassword,
      });
      await user.save();
      return res.json("User registered successfully.");
    }
  } catch (error) {
    console.error(error);
    res.json("An error occurred while registering the user.");
  }
});



router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed!' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Authentication failed!' });
    }
    
    const token = user.generateAuthToken();
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(200).json({ message: 'Authentication successful!', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

});


module.exports = router;
