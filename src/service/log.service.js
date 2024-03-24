import { logData } from '../data/log.data';

const getMoodOptions = () => {
  return logData.LOG_MOOD_OPTIONS;
};

const getPriorityOptions = () => {
  return logData.LOG_PRIORITY_OPTIONS;
};

const createLog = async ({
  userId,
  title,
  mood,
  priority,
  description,
  data,
}) => {
  console.dir({ userId, title, mood, priority, description, data });
};

export const logService = {
  getMoodOptions,
  getPriorityOptions,
  createLog,
};
