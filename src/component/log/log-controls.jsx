import { Link as ReactRouterLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';

export const LogControls = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ padding: '0 10px' }}>
      <Button
        startIcon={<Add></Add>}
        size="small"
        variant="outlined"
        color="success"
        to="/logs/create"
        component={ReactRouterLink}
      >
        Create
      </Button>
    </Stack>
  );
};
