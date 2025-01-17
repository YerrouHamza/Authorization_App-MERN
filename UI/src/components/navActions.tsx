import useAuthrization from "../customHooks/useAuthrization";
import Button from "./ui/button";

export default function NavActions() {
    const {authSingOut, isLogin} = useAuthrization();

    return <>
        {!isLogin ? 
            <div className="flex items-center gap-4">
                <Button type='link' toPath="/login" variant='secondary'>Login</Button>
                <Button type='link' toPath='/register' variant="primary">Register</Button>
            </div>
            :
            <Button variant="primary" onClick={authSingOut}>Logout</Button>
        }
    </>
}