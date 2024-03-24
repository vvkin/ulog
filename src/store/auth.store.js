import { makeAutoObservable } from 'mobx';
import { localStorageStore } from './local-storage.store';

const AUTH_STATE_KEY = 'auth';

const state = makeAutoObservable({
  userId: null,
});

const isAuthenticated = () => state.userId !== null;

const setAuthState = ({ userId }) => {
  localStorageStore.saveToStore(AUTH_STATE_KEY, JSON.stringify({ userId }));
  saveStateToStore({ userId });
};

const saveStateToStore = (newState) => {
  state.userId = newState.userId;
};

const resetAuthState = () => {
  state.userId = null;
  localStorageStore.removeFromStore(AUTH_STATE_KEY);
};

const loadAuthState = () => {
  const state = localStorageStore.getFromStore(AUTH_STATE_KEY);
  if (state) {
    saveStateToStore(JSON.parse(state));
  }
};

const getUserId = () => {
  return state.userId;
};

const getSessionId = () => {
  return state.userId;
};

loadAuthState();
export const authStore = {
  isAuthenticated,
  setAuthState,
  resetAuthState,
  getUserId,
  getSessionId,
};
