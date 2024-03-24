import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Stack, Pagination, List } from '@mui/material';

export const PageableList = observer(
  ({ rows, header, pageSize, rowMapperFn }) => {
    const [page, setPage] = useState(1);
    const pagesCount = Math.ceil(rows.length / pageSize);

    const handleChange = (_event, newPage) => {
      const pageNumber = Math.max(1, newPage);
      setPage(Math.min(pageNumber, pagesCount));
    };

    const getCurrentData = () => {
      const begin = (page - 1) * pageSize;
      const end = begin + pageSize;
      return rows.slice(begin, end);
    };

    return rows.length !== 0 ? (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        {header}
        <List dense sx={{ width: '100%', marginBottom: '5px' }}>
          {getCurrentData().map((row, idx) => (
            <li key={idx}>{rowMapperFn(row, idx)}</li>
          ))}
        </List>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={pagesCount}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    ) : null;
  },
);
