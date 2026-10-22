
import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let loginuser = localStorage.getItem("loginUser");

    return loginuser ? JSON.parse(loginuser) : null;
  });

  return (
    <Authcontext.Provider value={{ user, setUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
