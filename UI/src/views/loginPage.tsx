import { useState } from "react";
import { useAuthrization } from "../auth/authContext";
import DefualtLayout from "../layouts/defualtLayout";
import Button from "../components/button";
import Card from "../components/card";
import TextInput from "../components/textInput";

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

  return (
    <DefualtLayout isLogin={false}>
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

          <Button variant="primary" className="w-full py-2 text-lg" onClick={() => authLogin(loginInfo.email, loginInfo.password)}>Login</Button>
        </Card>
      </div>
    </DefualtLayout>
  )
}
