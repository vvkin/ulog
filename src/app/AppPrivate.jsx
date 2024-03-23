import { Navigate, Routes, Route } from 'react-router-dom';

import { useStore } from '../store';
import { IndexPage } from '../page';

export const AppPrivate = () => {
  const { authStore } = useStore();
  if (!authStore.isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
};
