import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Stack, Divider } from '@mui/material';

import { LogList } from '../component/log/log-list';
import { LogListControls } from '../component/log/log-list-controls';

export const IndexPage = observer(({ userStore }) => {
  const handleLogSearch = async ({ query, sort }) => {
    await userStore.loadLogs({ query, sort });
  };

  useEffect(() => {
    userStore.loadLogs({ sort: 'asc' });
  }, []);

  return (
    <Stack direction="column" spacing={2} sx={{ padding: '10px 0' }}>
      <LogListControls onSearch={handleLogSearch} />
      <Divider />
      <LogList logs={userStore.logs} />
    </Stack>
  );
});
