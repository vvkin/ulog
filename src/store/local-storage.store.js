const KEY_PREFIX = 'ulog-';

const saveToStore = (key, value) => {
  localStorage.setItem(prefixKey(key), value);
};

const removeFromStore = (key) => {
  localStorage.removeItem(prefixKey(key));
};

const getFromStore = (key) => {
  return localStorage.getItem(prefixKey(key));
};

const prefixKey = (key) => `${KEY_PREFIX}${key}`;

export const localStorageStore = {
  saveToStore,
  removeFromStore,
  getFromStore,
};
