import React from "react";
import WithAuthorizationProtection from "../auth/authorizationProtect";
import DefualtLayout from "../layouts/defualtLayout";

const HomePage = React.memo(() => {
  return (
    <DefualtLayout>
      <div>Welcome to the Home Page</div>
    </DefualtLayout>
  )
})

const ProtectedHomePage = WithAuthorizationProtection(HomePage);

export default ProtectedHomePage;
