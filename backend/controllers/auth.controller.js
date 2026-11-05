/**
 * auth.controller.js
**/

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// ─── REGISTER ──────────────────────────
export async function register(req, res) {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    await User.create({ username, password: hashed });
    res.status(201).json({
      success: true,
      message: 'Registered!'
    });
  }
  catch (err) {
    if (err.code === 11000) {
      // 11000 = MongoDB's code for 'duplicate unique field'
      return res.status(400).json({
        success: false,
        message: 'Username is already taken'
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Something went wrong'
    });
  }
}

// ─── LOGIN ──────────────────────────
export async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  // if user does not exist
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // if password doesn't match
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // user exists and password is correct => create token
  const token = jwt.sign(
    { id: user._id },       // PAYLOAD: data to put inside token
    process.env.JWT_SECRET, // SECRET
    { expiresIn: '7d' }
  )

  // store the token in cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.json({ 
    success: true,
    user: { id: user._id, username: user.username }
  });
}

// ─── LOGOUT ──────────────────────────
export function logout(req, res) {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  });

  res.json({
    success: true,
    message: 'Logged out successfully'
  })
}
