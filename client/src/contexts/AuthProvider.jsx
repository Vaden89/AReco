"use client";
import { useNavigate } from "react-router";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setUser({});
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const value = {
    user,
    logout,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error(
      "You  must use useAuth(), within <AuthProvider></AuthProvider>"
    );
  }
  return context;
};

export { AuthProvider, useAuth };
