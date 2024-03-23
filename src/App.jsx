import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppPublic } from './app/AppPublic';
import { AppPrivate } from './app/AppPrivate';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AppPublic />} />
          <Route path="*" element={<AppPrivate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
