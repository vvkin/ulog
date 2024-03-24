import { logData } from '../data/log.data';
import { mockData } from '../data/mock.data';
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
  if (userId === 'admin') {
    return mockData.LOG_ENTRIES;
  }
  return getLogsFromStoreByUserId(userId);
};

const searchLogsByUserId = async ({ userId, query, sort }) => {
  const allLogs = await getLogsByUserId(userId);
  const lowerCaseQuery = query?.toLowerCase();
  const filteredLogs = lowerCaseQuery
    ? allLogs.filter((log) =>
        log.title.toLowerCase().startsWith(lowerCaseQuery),
      )
    : allLogs;
  const sortMultiplier = sort === 'asc' ? 1 : -1;
  return filteredLogs.sort((a, b) => (a.id - b.id) * sortMultiplier);
};

const getLogById = async ({ logId, userId }) => {
  const allLogs = await getLogsByUserId(userId);
  return allLogs.find((log) => log.id === logId) ?? null;
};

const getLogsFromStoreByUserId = (userId) => {
  const rawLogs = localStorageStore.getFromStore(prefixLogStoreKey(userId));
  return rawLogs ? JSON.parse(rawLogs) : [];
};

const prefixLogStoreKey = (userId) => `${CREATED_LOG_STORE_KEY}-${userId}`;

export const logService = {
  getMoodOptions,
  getPriorityOptions,
  createLog,
  getLogsByUserId,
  searchLogsByUserId,
  getLogById,
};
