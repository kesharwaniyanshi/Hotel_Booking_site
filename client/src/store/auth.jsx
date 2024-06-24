


import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");
  const [hotels, setHotels] = useState([]);
const authorizationToken=`Bearer ${token}`;

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  }

  // JWT-AUTHENTICATION - TO GET CURRENTLY LOGGED IN USER DATA

  const userAuthentication = async () => {

    if (!token) {
      console.error("No token available");
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        // our main goal is to get the user data 👇
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to fetch hotels from database

  const getHotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/hotels", {
        method: "GET"
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.msg);
        setHotels(data.msg);
      }
    }
    catch (error) {
      console.log(`${error}`);
    }
  }

  useEffect(() => {
    getHotels();
    userAuthentication();
  }, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, hotels ,authorizationToken,isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};