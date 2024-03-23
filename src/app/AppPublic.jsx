import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../page/login';
import { useStore } from '../store';
import { NonAuthRoute } from '../component/auth/non-auth-route';

export const AppPublic = () => {
  const { authStore } = useStore();
  const isAuthenticatedFn = () => authStore.isAuthenticated();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <NonAuthRoute isAuthenticatedFn={isAuthenticatedFn}>
            <LoginPage />
          </NonAuthRoute>
        }
      />
    </Routes>
  );
};
