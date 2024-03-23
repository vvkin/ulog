import { useEffect } from 'react';
import { Navigate, Routes, Route, Outlet } from 'react-router-dom';

import { useStore } from '../store';
import { IndexPage } from '../page';
import { UserHeaderPanel } from '../component/auth/user-header-panel';
import { UserStore } from '../store/user.store';

export const AppPrivate = () => {
  const { authStore } = useStore();
  if (!authStore.isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }

  const userStore = new UserStore(authStore.getUserId());
  useEffect(() => {
    userStore.load().catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route
        element={
          <>
            <UserHeaderPanel userStore={userStore} />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<IndexPage />} />
      </Route>
    </Routes>
  );
};
