import { logData } from '../data/log.data';
import { localStorageStore } from '../store/local-storage.store';

const getMoodOptions = () => {
  return logData.LOG_MOOD_OPTIONS;
};

const getPriorityOptions = () => {
  return logData.LOG_PRIORITY_OPTIONS;
};

const CREATED_LOG_STORE_KEY = 'user-log-list';

const createLog = async ({
  userId,
  title,
  mood,
  priority,
  description,
  date,
}) => {
  const currentLogs = getLogsFromStoreByUserId(userId);
  const newLog = {
    id: currentLogs.length + 1,
    title,
    mood,
    priority,
    description,
    date,
  };
  const newLogs = [...currentLogs, newLog];
  localStorageStore.saveToStore(
    prefixLogStoreKey(userId),
    JSON.stringify(newLogs),
  );
};

const getLogsByUserId = async (userId) => {
  return getLogsFromStoreByUserId(userId).map((log) => mapLogEntry(log));
};

const getLogsFromStoreByUserId = (userId) => {
  const rawLogs = localStorageStore.getFromStore(prefixLogStoreKey(userId));
  return rawLogs ? JSON.parse(rawLogs) : [];
};

const getMoodById = (id) => {
  return logData.LOG_MOOD_OPTIONS.find((e) => e.id === id).value;
};

const getPriorityById = (id) => {
  return logData.LOG_PRIORITY_OPTIONS.find((e) => e.id === id).value;
};

const mapLogEntry = (log) => ({
  ...log,
  mood: getMoodById(log.mood),
  priority: getPriorityById(log.priority),
});

const prefixLogStoreKey = (userId) => `${CREATED_LOG_STORE_KEY}-${userId}`;

export const logService = {
  getMoodOptions,
  getPriorityOptions,
  createLog,
  getLogsByUserId,
};
