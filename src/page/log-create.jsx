import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, Paper } from '@mui/material';

import { logService } from '../service/log.service';
import { LogCreateForm } from '../component/log/log-create-form';

export const LogCreatePage = observer(({ userStore }) => {
  const navigate = useNavigate();

  const handleLogCreate = async (data) => {
    try {
      await logService.createLog({ ...data, userId: userStore.id });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ padding: '35px', maxWidth: '560px', margin: '0 auto' }}>
      <Paper sx={{ padding: '36px' }} elevation={4}>
        <LogCreateForm
          onSubmit={handleLogCreate}
          moodOptions={logService.getMoodOptions()}
          priorityOptions={logService.getPriorityOptions()}
        />
      </Paper>
    </Box>
  );
});
