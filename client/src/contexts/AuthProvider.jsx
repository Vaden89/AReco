import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = {
    user,
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
