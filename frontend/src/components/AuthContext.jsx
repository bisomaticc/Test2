import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);

  const login = (email) => {
    setUserEmail(email);
  };

  const value = {
    userEmail,
    login, // 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
