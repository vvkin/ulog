const KEY_PREFIX = 'ulog';

export const saveToStore = (key, value) => {
    localStorage.setItem(prefixKey(key), value);
};

export const removeFromStore = (key) => {
    localStorage.removeItem(prefixKey(key));
};

export const getFromStore = (key) => {
    return localStorage.getItem(prefixKey(key));
};

const prefixKey = (key) => `${KEY_PREFIX}${key}`;
