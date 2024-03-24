import { useEffect, useState } from 'react';
import { Stack, Divider } from '@mui/material';

import { logService } from '../service/log.service';
import { LogsList } from '../component/log/log-list';
import { LogControls } from '../component/log/log-controls';

export const IndexPage = ({ userStore }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    logService
      .getLogsByUserId(userStore.id)
      .then((logs) => setLogs(logs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Stack direction="column" spacing={2} sx={{ padding: '10px 0' }}>
      <LogControls userId={userStore.id} />
      <Divider />
      <LogsList logs={logs} />
    </Stack>
  );
};
