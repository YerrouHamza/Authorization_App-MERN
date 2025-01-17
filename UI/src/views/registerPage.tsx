import { useState } from "react";
import useAuthrization from "../customHooks/useAuthrization";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import TextInput from "../components/ui/textInput";

type LoginInfoType = {
  userName: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const { authRegister } = useAuthrization()
  const [newUserInfo, setNewUserInfo] = useState<LoginInfoType>({
    userName: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewUserInfo({
        ...newUserInfo,
        [name]: value
    });
  }

  const handleRegisterNewUser = () => {
    try {
      authRegister(
        newUserInfo.userName,
        newUserInfo.email,
        newUserInfo.password
      )
    } catch (error) {
      console.error('"Register" error while register new user ', error);
    }
  }
  return (
    <div className="flex justify-center items-center h-4/5">
      <Card className="space-y-10" title="Register">
        <form className="space-y-5">
          <TextInput
            type="text"
            name="userName"
            label="UserName"
            value={newUserInfo.userName}
            onChange={handleChange}
          />
          <TextInput
            type="email"
            name="email"
            label="Email"
            value={newUserInfo.email}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={newUserInfo.password}
            onChange={handleChange}
          />
        </form>

        <Button variant="primary" className="w-full py-2 text-lg" onClick={handleRegisterNewUser}>Create Account</Button>
      </Card>
    </div>
  )
}
