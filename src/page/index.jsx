import { useEffect, useState } from 'react';
import { Stack, Divider } from '@mui/material';

import { logService } from '../service/log.service';
import { LogList } from '../component/log/log-list';
import { LogListControls } from '../component/log/log-list-controls';

export const IndexPage = ({ userStore }) => {
  const [logs, setLogs] = useState([]);

  const handleLogSearch = async ({ query, sort }) => {
    try {
      const filteredLogs = await logService.searchLogsByUserId({
        userId: userStore.id,
        query,
        sort,
      });
      setLogs(filteredLogs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    logService
      .getLogsByUserId(userStore.id)
      .then((logs) => setLogs(logs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Stack direction="column" spacing={2} sx={{ padding: '10px 0' }}>
      <LogListControls onSearch={handleLogSearch} />
      <Divider />
      <LogList logs={logs} />
    </Stack>
  );
};
