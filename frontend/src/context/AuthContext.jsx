import { createContext, useState, useEffect } from "react";

// 1. Create the Context (The empty box)
export const AuthContext = createContext();

// 2. Create the Provider (The data manager)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login Function 
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);``
  };

  return (
    // 3. Share these values with the whole app
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};