import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Button,
  Stack,
  Divider,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Add, Search } from '@mui/icons-material';

export const LogListControls = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  const handleLogSearch = async (event) => {
    event.preventDefault();
    await onSearch({ query, sort });
  };

  return (
    <Stack direction="row" spacing={3} sx={{ padding: '0 10px' }}>
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
      <Divider orientation="vertical" flexItem />
      <TextField
        size="small"
        id="log__search__query"
        label="Query"
        variant="outlined"
        type="text"
        maxLength="255"
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
        autoComplete="email"
      />
      <Stack direction="row" alignItems="center" spacing={2}>
        <InputLabel id="log__search__sort">Sort</InputLabel>
        <Select
          id="log__search__sort"
          size="small"
          required
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value="asc">ASC</MenuItem>
          <MenuItem value="desc">DESC</MenuItem>
        </Select>
      </Stack>
      <Button
        size="small"
        type="submit"
        startIcon={<Search></Search>}
        onClick={handleLogSearch}
        variant="outlined"
      >
        Search
      </Button>
    </Stack>
  );
};
