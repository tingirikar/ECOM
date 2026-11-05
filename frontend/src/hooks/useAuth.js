/**
 * useAuth.js
**/

import { useState } from 'react';
import { logoutUser } from '../api/authApi.js';

export function useAuth() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, handleLogin, handleLogout };
}
