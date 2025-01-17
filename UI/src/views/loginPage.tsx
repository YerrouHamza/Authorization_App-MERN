import { useState } from "react";
import { useAuthrization } from "../auth/authContext";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import TextInput from "../components/ui/textInput";

type LoginInfoType = {
  email: string,
  password: string
}

export default function LoginPage() {
  const {authLogin} = useAuthrization()
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: '',
    password: ''
  });
  
  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginInfo({
        ...loginInfo,
        [name]: value
    });
  }

  const handleLogin = () => {
    try {
      authLogin(
        loginInfo.email,
        loginInfo.password
      )
    } catch (error) {
      console.error('"Login" error while login into account', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-4/5">
      <Card className="space-y-10" title="Login">
        <form className="space-y-5">
          <TextInput
            type="email"
            name='email'
            label="Email"
            value={loginInfo?.email}
            onChange={handleUserInfoChange}
          />
          <TextInput
            type="password"
            name='password'
            label="Password"
            value={loginInfo?.password}
            onChange={handleUserInfoChange}
          />
        </form>

        <Button variant="primary" className="w-full py-2 text-lg" onClick={handleLogin}>Login</Button>
      </Card>
    </div>
  )
}
