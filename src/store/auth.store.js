import { makeAutoObservable } from "mobx";
import * as localStorageStore from './local-storage.store';

const AUTH_STATE_KEY = 'auth';

const state = makeAutoObservable({
    userId: null,
});

export const isAuthenticated = () => state.userId !== null;

export const setAuthState = ({ userId }) => {
    state.userId = userId;
    localStorageStore.saveToStore(AUTH_STATE_KEY, JSON.stringify({ userId }));
};

export const resetAuthState = () => {
    state.userId = null;
    localStorageStore.removeFromStore(AUTH_STATE_KEY);
}

export const getUserId = () => {
    return state.userId;
};