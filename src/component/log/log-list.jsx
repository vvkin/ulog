import { List, Box, Typography, Divider } from '@mui/material';
import { LogListItem } from './log-list-item';

export const LogsList = ({ logs }) => {
  return logs.length !== 0 ? (
    <List dense>
      {logs.map((log, idx) => (
        <li key={log.id}>
          <LogListItem
            id={log.id}
            title={log.title}
            mood={log.mood}
            priority={log.priority}
            date={log.date}
          />
          {idx !== logs.length - 1 ? <Divider /> : null}
        </li>
      ))}
    </List>
  ) : (
    <Box>
      <Typography>No logs found</Typography>
    </Box>
  );
};
