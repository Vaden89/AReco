"use client";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
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
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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

  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <img
          src="/images/not-allowed.jpg"
          width={200}
          height={200}
          alt=""
          className="w-full sm:w-1/4 h-1/2"
        />
        <span className="text-4xl sm:text-5xl">
          You shouldn&apos;t be here{" "}
        </span>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-xl sm:text-2xl bg-gray-100 hover:bg-gray-200 hover:scale-105 p-2 rounded-xl"
        >
          <ArrowLeft />
          <span>Go Home</span>
        </button>
      </div>
    );
  }

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
