import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../auth/api";
import useLoader from "../customHooks/useLoader";

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
  const { setIsLoading } = useLoader();
  const [user, setUser] = useState<UserType | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(() => !!localStorage.getItem("token_key"));

  const authLogin = async (email: string, password: string) => {
    setIsLoading(true);
    await api.post('/auth/login', {email, password})
      .then((res) => {
        const data = res.data
        localStorage.setItem('token_key', JSON.stringify(data.token));
        
        setUser(data.user);
        setIsLogin(true)
        
        navigate('/')

        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.error(err);
      })
  }

  const authRegister = async (userName: string, email: string, password: string ) => {
    setIsLoading(true)
    await api.post('/auth/register', {userName: userName, email, password})
      .then(() => {
        navigate('/login')
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.error(err);
      })
  }

  const authSingOut = () => {
    setIsLoading(true)
    localStorage.removeItem('token_key');
    setIsLogin(false)
    navigate('/login');

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <AuthrizationContext.Provider value={{user, isLogin, authLogin, authRegister, authSingOut }}>
      {children}
    </AuthrizationContext.Provider>
  );
};

export default AuthrizationContext;