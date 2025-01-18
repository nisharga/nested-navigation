import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  isLogin: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLogin, setIsLogin] = useState(false);

  const signIn = () => setIsLogin(true);
  const signOut = () => setIsLogin(false);

  return (
    <AuthContext.Provider value={{ isLogin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
