import { Box, Typography } from '@mui/material';

export const AuthHeader = ({ body }) => (
  <Box
    sx={{
      mb: '15px',
    }}
  >
    <Typography
      component="h1"
      variant="h4"
      sx={{ mb: '10px', textAlign: 'center' }}
    >
      ULog
    </Typography>
    <Typography
      component="h2"
      variant="h6"
      sx={{ textAlign: 'center', fontWeight: 'light' }}
    >
      {body}
    </Typography>
  </Box>
);
