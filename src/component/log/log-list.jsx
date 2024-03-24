import { Box } from '@mui/material';

import { LogListItem } from './log-list-item';
import { PageableList } from '../shared/pageable-list';

export const LogList = ({ logs }) => {
  return (
    <Box>
      <PageableList
        pageSize={10}
        rows={logs}
        rowMapperFn={(log) => {
          return (
            <LogListItem
              id={log.id}
              title={log.title}
              mood={log.mood}
              priority={log.priority}
              date={log.date}
            />
          );
        }}
      />
    </Box>
  );
};
