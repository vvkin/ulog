import { useEffect, useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

import { AppPublic } from './app/AppPublic';
import { AppPrivate } from './app/AppPrivate';
import { useStore } from './store';
import { authService } from './service/auth.service';

export const App = () => {
  const { authStore } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authStore.isAuthenticated()) {
      setIsLoading(false);
      return;
    }
    authService
      .refreshSession(authStore.getSessionId())
      .then((state) => authStore.setAuthState(state))
      .catch(() => authStore.resetAuthState())
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/auth/*" element={<AppPublic />} />
            <Route path="*" element={<AppPrivate />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
};

export default App;
