export const increment = (amount = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: amount,
});

export const decrement = (amount = 1) => ({
  type: 'DECREMENT_COUNTER',
  payload: amount,
});

export const counterFetchStart = () => ({
  type: 'COUNTER_FETCH_START',
});

export const counterFetchOk = data => ({
  type: 'COUNTER_FETCH_OK',
  data,
});

export const counterFetchError = error => ({
  type: 'COUNTER_FETCH_ERROR',
  error,
});

export function counterFetchData(url) {
  return dispatch => {
    dispatch(counterFetchStart);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(counterFetchOk(data)))
      .catch(error => dispatch(counterFetchError(error)));
  };
}
