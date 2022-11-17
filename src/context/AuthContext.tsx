import { useContext, createContext, type Children, ReactChild, ReactFragment, ReactPortal } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = (children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => {
  const value = {
    user: null,
    login: () => {
      console.log("login");
    },
    logout: () => {
      console.log("logout");
    },
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}
