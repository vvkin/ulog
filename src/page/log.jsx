import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LinearProgress, Typography, Box, Paper } from '@mui/material';

import { LogOverview } from '../component/log/log-overview';
import { LogStore } from '../store/log.store';

const LogPageInner = observer(({ logStore }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    logStore
      .load()
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <LinearProgress />
  ) : logStore.title !== null ? (
    <Box sx={{ padding: '35px 0', maxWidth: '600px', margin: '0 auto' }}>
      <Paper sx={{ padding: '35px' }} elevation={4}>
        <LogOverview logStore={logStore} />
      </Paper>
    </Box>
  ) : (
    <Typography
      component="h1"
      variant="h4"
      sx={{ margin: '30px' }}
      align="center"
    >
      404 Not Found :(
    </Typography>
  );
});

export const LogPage = ({ userStore }) => {
  const { id: logId } = useParams();
  const logStore = new LogStore({
    logId: parseInt(logId, 10),
    userId: userStore.id,
  });
  return <LogPageInner logStore={logStore} />;
};
