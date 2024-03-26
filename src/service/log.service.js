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
  const currentLogs = await getLogsByUserId(userId);
  const newLog = {
    id: currentLogs.length + 1,
    title,
    mood,
    priority,
    description,
    date,
  };
  const newLogs = [...currentLogs, newLog];
  saveLogsToStoreByUserId(userId, newLogs);
};

const getLogsByUserId = async (userId) => {
  return getLogsFromStoreByUserId(userId).map((log) => mapLog(log));
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
  return filteredLogs.sort(
    (a, b) => (a.date.getTime() - b.date.getTime()) * sortMultiplier,
  );
};

const getLogById = async ({ logId, userId }) => {
  const allLogs = await getLogsByUserId(userId);
  const log = allLogs.find((log) => log.id === logId);
  return log ? mapLog(log) : null;
};

const mapLog = (log) => ({
  ...log,
  date: new Date(log.date),
});

const getLogsFromStoreByUserId = (userId) => {
  const rawLogs = localStorageStore.getFromStore(prefixLogStoreKey(userId));
  return rawLogs ? JSON.parse(rawLogs) : [];
};

const saveLogsToStoreByUserId = (userId, logs) => {
  localStorageStore.saveToStore(
    prefixLogStoreKey(userId),
    JSON.stringify(logs),
  );
};

const prefixLogStoreKey = (userId) => `${CREATED_LOG_STORE_KEY}-${userId}`;

const loadAdminLogs = async () => {
  const userId = 'admin';
  const adminLogs = await getLogsByUserId('admin');
  if (adminLogs.length === 0) {
    saveLogsToStoreByUserId(userId, mockData.LOG_ENTRIES);
  }
};
loadAdminLogs();

export const logService = {
  getMoodOptions,
  getPriorityOptions,
  createLog,
  getLogsByUserId,
  searchLogsByUserId,
  getLogById,
};
