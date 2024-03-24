import { Stack, TextField, MenuItem, Typography } from '@mui/material';
import { formatDateToDatetimeLocal } from '../../lib/date.utils';
import { LogPriority } from './log-priority';
import { LogMood } from './log-mood';

const LogOverviewItem = ({ name, label, value, readOnly = true }) => {
  return (
    <TextField
      id={`log__overview__${name}`}
      size="small"
      value={value}
      label={label}
      type="text"
      InputProps={{
        readOnly,
      }}
    />
  );
};

export const LogOverview = ({ logStore }) => {
  return (
    <Stack spacing={3} component="form">
      <Typography variant="h5" component="h1" align="center">
        Log #{logStore.id}
      </Typography>
      <LogOverviewItem name="title" label="Title" value={logStore.title} />
      <TextField
        id={`log__overview__mood`}
        size="small"
        value={logStore.mood}
        label="Mood"
        select
        InputProps={{ readOnly: true }}
      >
        <MenuItem value={logStore.mood}>
          <LogMood name={logStore.mood} />
        </MenuItem>
      </TextField>
      <TextField
        id={`log__overview__priority`}
        size="small"
        label="Priority"
        select
        value={logStore.priority}
        InputProps={{ readOnly: true }}
      >
        <MenuItem value={logStore.priority}>
          <LogPriority name={logStore.priority} />
        </MenuItem>
      </TextField>
      <TextField
        id={`log__overview__date`}
        size="small"
        value={formatDateToDatetimeLocal(logStore.date)}
        label="Created"
        type="datetime-local"
        InputProps={{ readOnly: true }}
      />
      <TextField
        id={`log__overview__description`}
        size="small"
        multiline
        value={logStore.description}
        label="Description"
        type="text"
        minRows={10}
        maxRows={10}
        InputProps={{ readOnly: true }}
      />
    </Stack>
  );
};
