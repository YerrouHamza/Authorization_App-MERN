import React from "react";
import WithAuthorizationProtection from "../auth/authorizationProtect";

const HomePage = React.memo(() => {
  return (
      <div>Welcome to the Home Page</div>
  )
})

const ProtectedHomePage = WithAuthorizationProtection(HomePage);

export default ProtectedHomePage;
