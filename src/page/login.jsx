import { Box, Paper } from '@mui/material';

import { LoginForm } from '../component/auth/login-form';
import { AuthHeader } from '../component/auth/auth-header';

export const LoginPage = () => {
  return (
    <Box
      sx={{
        fontFamily: 'default',
        width: '450px',
        minHeight: '75vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{ padding: '48px' }} elevation={4}>
        <AuthHeader body="Login" />
        <LoginForm />
      </Paper>
    </Box>
  );
};
