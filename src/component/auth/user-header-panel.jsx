import { useNavigate } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';

import { useStore } from '../../store';
import * as authService from '../../service/auth.service';

export const UserHeaderPanel = observer(({ userStore }) => {
  const navigate = useNavigate();
  const { authStore } = useStore();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await authService.logout();
    } finally {
      authStore.resetAuthState();
      navigate(0);
    }
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              display: 'inline-flex',
            }}
            component={ReactRouterLink}
            to="/"
          >
            <Typography
              sx={{
                fontFamily: 'default',
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
            >
              ULog
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <Typography display="inline">Hi,&nbsp;</Typography>
            <Typography display="inline" sx={{ textDecoration: 'underline' }}>
              {userStore.username}
            </Typography>
          </Box>
          <Button size="small" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
});
