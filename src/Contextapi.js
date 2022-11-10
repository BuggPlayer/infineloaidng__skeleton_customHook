import React, { createContext , useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [state, setstate] = useState('EGQE')
  return (
    <UserContext.Provider value={{state }}>
      {children}
    </UserContext.Provider>
  );
};
