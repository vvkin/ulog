import { Stack, Typography } from '@mui/material';
import { Filter1, Filter2, Filter3 } from '@mui/icons-material';

export const LogPriority = ({ name }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {mapPriorityToIcon(name)}
      <Typography display="inline">{name}</Typography>
    </Stack>
  );
};

const mapPriorityToIcon = (name) => {
  return {
    low: <Filter1 size="small" color="info" />,
    medium: <Filter2 size="small" color="warning" />,
    high: <Filter3 size="small" color="error" />,
  }[name];
};
