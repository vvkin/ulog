import { Box } from '@mui/material';

import { LoginForm } from '../component/auth/login-form';
import { AuthHeader } from '../component/auth/auth-header';

export const LoginPage = () => {
  return (
    <Box sx={{ padding: '30px 0', fontFamily: 'default' }}>
      <AuthHeader body="Login" />
      <LoginForm></LoginForm>
    </Box>
  );
};
