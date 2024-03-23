import * as authStore from './auth.store';
import * as userStore from './user.store';

export const useStore = () => ({
    authStore: authStore,
    userStore: userStore,
});
