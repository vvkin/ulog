import * as authStore from './auth.store';

export const getUser = () => {
  const userId = authStore.getUserId();
  return { userId };
};
