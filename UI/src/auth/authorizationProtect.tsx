import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthrization from '../customHooks/useAuthrization';

// HOC for protect the pages that need to be login to visit
function WithAuthorizationProtection<T extends Record<string, unknown>>(WrappedComponent: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const { isLogin, user } = useAuthrization();

    if (!isLogin || !user) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithAuthorizationProtection;