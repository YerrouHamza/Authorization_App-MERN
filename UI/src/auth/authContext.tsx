import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

interface UserType {
  userName: string;
  email: string;
}

type AuthrizationContextType = {
    user: UserType | null;
    isLogin: boolean;
    authLogin: (email: string, password: string) => void;
    authRegister: (userName: string, email: string, password: string) => void;
    authSingOut: () => void;
}

const AuthrizationContext = createContext<AuthrizationContextType | null>(null);

export const AuthrizationContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(() => !!localStorage.getItem("token_key"));

  const authLogin = async (email: string, password: string) => {
    await api.post('/auth/login', {email, password})
      .then((res) => {
        const data = res.data
        localStorage.setItem('token_key', JSON.stringify(data.token));
        
        setUser(data.user);
        setIsLogin(true)
        
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const authRegister = async (userName: string, email: string, password: string ) => {
    await api.post('/auth/register', {userName, email, password})
      .then(() => {
        navigate('/login')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const authSingOut = () => {
    localStorage.removeItem('token_key');
    setIsLogin(false)
    navigate('/login');
  }

  return (
    <AuthrizationContext.Provider value={{user, isLogin, authLogin, authRegister, authSingOut }}>
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