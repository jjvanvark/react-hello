export const increment = (amount = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: amount,
});

export const decrement = (amount = 1) => ({
  type: 'DECREMENT_COUNTER',
  payload: amount,
});
