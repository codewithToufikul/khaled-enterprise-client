import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "./axiosIntance";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const login = async (username, password) => {
    setUserLoading(true);

    try {
      const res = await axiosInstance.post("/auth/admin/login", {
        username,
        password,
      });
      console.log(res.data.data);
      const { token, user } = res.data.data;

      // Save to localStorage
      localStorage.setItem("token", token);

      // Save user to context or state
      setUser(user);

      toast.success("Login successful!");
      return true;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "Login failed!";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setUserLoading(false);
    }
  };
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setUserLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get("/auth/admin/profile");
        setUser(res.data.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
        setUser(null);
      } finally {
        setUserLoading(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
