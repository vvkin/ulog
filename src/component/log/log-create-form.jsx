import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';
import { LogMood } from './log-mood';
import { LogPriority } from './log-priority';

import { formatDateToDatetimeLocal } from '../../lib/date.utils';

export const LogCreateForm = ({ onSubmit, moodOptions, priorityOptions }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(1);
  const [mood, setMood] = useState(1);
  const [date, setDate] = useState(formatDateToDatetimeLocal(new Date()));

  const handleLogCreate = async (event) => {
    event.preventDefault();
    await onSubmit({
      title: title.trim(),
      priority,
      mood,
      date: new Date(date),
      description: description.trim(),
    });
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      component="form"
      onSubmit={handleLogCreate}
    >
      <Typography align="center" variant="h6">
        Create a log
      </Typography>
      <TextField
        size="small"
        required
        fullWidth
        id="log__create__title"
        label="Title"
        type="text"
        maxLength="255"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Stack direction="row" spacing={4} justifyContent="space-around">
        <Select
          id="log__create__mood"
          size="small"
          fullWidth
          required
          label="Mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          {moodOptions.map(({ id, value }, idx) => (
            <MenuItem key={idx} value={id}>
              <LogMood name={value} />
            </MenuItem>
          ))}
        </Select>
        <Select
          id="log__create__priority"
          size="small"
          fullWidth
          required
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {priorityOptions.map(({ id, value }, idx) => (
            <MenuItem key={idx} value={id}>
              <LogPriority name={value} />
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <TextField
        size="small"
        fullWidth
        multiline
        minRows={10}
        maxRows={10}
        id="log__create__description"
        label="What's it about?"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        size="small"
        fullWidth
        id="log__create__date"
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button variant="outlined" type="submit" fullWidth>
        Create
      </Button>
    </Stack>
  );
};
