import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthrization } from './authContext';

function WithAuthorizationProtection<T extends Record<string, unknown>>(WrappedComponent: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const { isLogin } = useAuthrization();

    if (!isLogin) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithAuthorizationProtection;