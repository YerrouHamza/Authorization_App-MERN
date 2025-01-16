import Button from "../components/button";
import Card from "../components/card";
import TextInput from "../components/textInput";
import DefualtLayout from "../layouts/defualtLayout";

export default function RegisterPage() {
  return (
    <DefualtLayout isLogin={false}>
        <div className="flex justify-center items-center h-4/5">
        <Card className="space-y-10" title="Register">
          <form className="space-y-5">
            <TextInput
              type="text"
              label="UserName"
              value=""
              onChange={() => ''}
            />
            <TextInput
              type="email"
              label="Email"
              value=""
              onChange={() => ''}
            />
            <TextInput
              type="password"
              label="Password"
              value=""
              onChange={() => ''}
            />
          </form>

          <Button variant="primary" className="w-full py-2 text-lg">Create Account</Button>
        </Card>
      </div>
    </DefualtLayout>
  )
}
