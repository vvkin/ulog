import { makeAutoObservable } from 'mobx';
import { localStorageStore } from './local-storage.store';

const AUTH_STATE_KEY = 'auth';

const state = makeAutoObservable({
  userId: null,
});

const isAuthenticated = () => state.userId !== null;

const setAuthState = ({ userId }) => {
  state.userId = userId;
  localStorageStore.saveToStore(AUTH_STATE_KEY, JSON.stringify({ userId }));
};

const resetAuthState = () => {
  state.userId = null;
  localStorageStore.removeFromStore(AUTH_STATE_KEY);
};

const getUserId = () => {
  return state.userId;
};

const getSessionId = () => {
  return state.userId;
};

export const authStore = {
  isAuthenticated,
  setAuthState,
  resetAuthState,
  getUserId,
  getSessionId,
};
