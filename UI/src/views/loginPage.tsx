import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthrization from "../customHooks/useAuthrization";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import TextInput from "../components/ui/textInput";

const loginSchima = yup.object().shape({
  email: yup.string().required('Email field is required').email('Please enter a valid email'),
  password: yup.string().required('Password field is required').min(6, 'Password must be at least 6 characters')
})

type LoginInfoType = {
  email: string,
  password: string
}

export default function LoginPage() {
  const {authLogin} = useAuthrization()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfoType>({
    resolver: yupResolver(loginSchima),
  });

  const handleLogin = (formData: LoginInfoType) => {
    try {
      authLogin(formData.email, formData.password);
    } catch (error) {
      console.error('"Login" error while login into account', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-4/5">
      <Card className="space-y-10" title="Login">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-5 mb-10">
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
          
          <Button 
            type="submit"
            variant="primary" 
            className="w-full py-2 text-lg" 
          >Login</Button>
        </form>
      </Card>
    </div>
  )
}
