import { createContext, useState, useContext, useEffect } from "react";
import { requestRegister, requestLogin, getProfileRequest } from "../utils/api";

const CurrentUserContext = createContext();

export const useAuth = () => {
  const contexts = useContext(CurrentUserContext);
  if (!contexts) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return contexts;
};

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);

  const signup = (values) => {
    requestRegister(values)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setCurrentUser({ username: res.username, email: res.email });
          setIsAuthenticated(true);
        }
        return setErrors(res.message);
      })
      .catch((err) => {
        setErrors(err.response);
      });
  };

  const signin = (values) => {
    requestLogin(values)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setCurrentUser({ username: res.username, email: res.email });
          setIsAuthenticated(true);
        }
        return setErrors(res.message);
      })
      .catch((err) => {
        setErrors(err.response);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const getProfile = () => {
    getProfileRequest()
      .then((res) => {
        setCurrentUser({ username: res.username, email: res.email });
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile();
    }

    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <CurrentUserContext.Provider
      value={{ signup, isAuthenticated, errors, signin, currentUser, logout }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
