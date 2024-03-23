import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, FormGroup, TextField, Button } from '@mui/material';

import { authService } from '../../service/auth.service';
import { authStore } from '../../store/auth.store';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { userId } = await authService.login({ login, password: login });
      authStore.setAuthState({ userId });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        width: '350px',
        padding: '25px',
        margin: '0 auto',
        border: 1,
      }}
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{ '& .MuiTextField-root': { mb: 2 } }}
      >
        <FormGroup>
          <TextField
            size="small"
            required
            fullWidth
            id="login__login"
            label="Username"
            variant="outlined"
            type="text"
            maxLength="255"
            value={login}
            onChange={(e) => setLogin(e.target.value.trim())}
            autoComplete="email"
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
};
