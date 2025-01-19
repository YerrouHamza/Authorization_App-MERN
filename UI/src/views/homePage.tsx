import React from "react";
import useAuthrization from "../customHooks/useAuthrization";
import WithAuthorizationProtection from "../auth/authorizationProtect";
import WelcomeMsg from "../components/Welcomemsg";

const HomePage = React.memo(() => {
  const {user} = useAuthrization();
  return (
      <div>
        <WelcomeMsg className="text-3xl text-boxdark font-medium mb-8" name={user?.userName || ''} />
        <h2 className="text-xl font-bold text-gray-600 mb-2">Welcome to the MERN Stack - Authorization App</h2>
        <section className="text-lg text-gray-600 space-y-1">
          <p>
            This app was built using the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> as a project to showcase my skills as a MERN Stack Developer.
          </p>
          <p>
            It can also be a great starting point for your next app. The code is clean, well-structured, and easy to modify, allowing you to quickly build and customize your own application, with ready authentication and authorization features, and protected routes for only logged-in users.
          </p>
        </section>
      </div>
  )
})

const ProtectedHomePage = WithAuthorizationProtection(HomePage);
export default ProtectedHomePage;
