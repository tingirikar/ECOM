import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// REGISTER
export async function register(req, res) {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashed });
  res.status(201).json({
    success: true,
    message: 'Registered!'
  });
}

// LOGIN
export async function login(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.send(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  const token = jwt.sign(
    { id: user._id },       // PAYLOAD: data to put inside token
    process.env.JWT_SECRET, // SECRET
    { expireIn: '7d' }
  )

  res.json({ success: true, token });

}
