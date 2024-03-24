// eslint-disable-next-line no-unused-vars
const logout = async ({ sessionId }) => {
  // no-op
};

// eslint-disable-next-line no-unused-vars
const register = async ({ login, password }) => {
  // no-op
};

// eslint-disable-next-line no-unused-vars
const login = async ({ login, password }) => {
  return { userId: login };
};

export const authService = {
  login,
  register,
  logout,
};
