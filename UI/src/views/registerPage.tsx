import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup";
import useAuthrization from "../customHooks/useAuthrization";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import TextInput from "../components/ui/textInput";

type RegisterInfoType = {
  userName: string;
  email: string;
  password: string;
}

const registerSchima = yup.object().shape({
  userName: yup.string().required('UserName field is required').min(3, 'UserName must be at least 3 characters'),
  email: yup.string().required('Email field is required').email('Please enter a valid email'),
  password: yup.string().required('Password field is required').min(6, 'Password must be at least 6 characters')
})

export default function RegisterPage() {
  const { authRegister } = useAuthrization()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchima)
  })

  const handleRegisterNewUser = (fromData: RegisterInfoType) => {
    try {
      authRegister(fromData.userName, fromData.email, fromData.password)
    } catch (error) {
      console.error('"Register" error while register new user ', error);
    }
  }
  return (
    <div className="flex justify-center items-center h-4/5">
      <Card className="space-y-10" title="Register">
        <form onSubmit={handleSubmit(handleRegisterNewUser)}>
          <div className="space-y-5 mb-10">
            <TextInput
              type="text"
              label="UserName"
              {...register("userName")}
              errorMessage={errors.userName?.message}
            />
            <TextInput
              type="email"
              label="Email"
              {...register("email")}
              errorMessage={errors.email?.message}
            />
            <TextInput
              type="password"
              label="Password"
              {...register("password")}
              errorMessage={errors.password?.message}
            />
          </div>
          <Button variant="primary" type="submit" className="w-full py-2 text-lg">Create Account</Button>
        </form>
      </Card>
    </div>
  )
}
