export const setUsername = value => ({
  type: 'SET_USERNAME',
  payload: value,
});

export const setPassword = value => ({
  type: 'SET_PASSWORD',
  payload: value,
});

export const check = () => ({
  type: 'CHECK_LOGIN',
});
