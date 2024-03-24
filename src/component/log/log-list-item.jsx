import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
} from '@mui/material';
import { Book } from '@mui/icons-material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { LogMood } from './log-mood';
import { LogPriority } from './log-priority';

export const LogListItem = ({ id, title, mood, priority, date }) => {
  return (
    <ListItemButton component={ReactRouterLink} to={`logs/${id}`} key={id}>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Typography variant="h7">#{id}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h7">{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <LogMood name={mood} />
          </Grid>
          <Grid item xs={2}>
            <LogPriority name={priority} />
          </Grid>
          <Grid item xs={2}>
            {new Date(date).toLocaleString()}
          </Grid>
        </Grid>
      </ListItemText>
    </ListItemButton>
  );
};
