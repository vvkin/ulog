import { Stack, Typography } from '@mui/material';
import {
  SentimentNeutral,
  SentimentSatisfied,
  SentimentDissatisfied,
} from '@mui/icons-material';

export const LogMood = ({ name }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {mapMoodToIcon(name)}
      <Typography display="inline">{name}</Typography>
    </Stack>
  );
};

const mapMoodToIcon = (name) => {
  return {
    positive: <SentimentSatisfied fontSize="small" color="success" />,
    neutral: <SentimentNeutral fontSize="small" />,
    negative: <SentimentDissatisfied fontSize="small" color="error" />,
  }[name];
};
