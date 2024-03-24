import { Typography, Stack } from '@mui/material';

export const LogSelectItemInner = ({ icon, text }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography display="inline">{text}</Typography>
    </Stack>
  );
};
