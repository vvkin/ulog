import { LogCreateForm } from '../component/log/log-create-form';
import { logService } from '../service/log.service';

export const IndexPage = ({ userStore }) => {
  const handleLogCreate = async (data) => {
    await logService.createLog({ ...data, userId: userStore.id });
  };

  return (
    <>
      <LogCreateForm
        moodOptions={logService.getMoodOptions()}
        priorityOptions={logService.getPriorityOptions()}
        onSubmit={handleLogCreate}
      />
    </>
  );
};
