import { createContext, ReactNode, useContext, useState } from "react";

interface UserType {
  userName: string;
  email: string;
}

type AuthrizationContextType = {
    user: UserType | null;
    setUser: (value: UserType) => void;
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
}

const AuthrizationContext = createContext<AuthrizationContextType | null>(null);

export const AuthrizationContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(() => !!localStorage.getItem("token_key"));

  return (
    <AuthrizationContext.Provider value={{user, setUser, isLogin, setIsLogin }}>
      {children}
    </AuthrizationContext.Provider>
  );
};

// Create custom hook for getting the Authorization context
export const useAuthrization = () => {
  const context = useContext(AuthrizationContext);
  if (!context) {
    throw new Error("Error: AuthrizationContext must be used within AuthrizationContextProvider");
  }
  return context;
};