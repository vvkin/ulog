import { Navigate } from 'react-router-dom';

export const NonAuthRoute = ({ isAuthenticatedFn, children }) =>
  isAuthenticatedFn() ? <Navigate to="/" /> : children;
