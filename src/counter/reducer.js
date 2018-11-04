const initialState = {
  amount: 0,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {...state, amount: state.amount + action.payload};
    case 'DECREMENT_COUNTER':
      return {...state, amount: state.amount - action.payload};
    case 'COUNTER_FETCH_START':
      return {...state, loading: true};
    case 'COUNTER_FETCH_OK':
      console.log(action.data);
      return {...state, loading: false};
    case 'COUNTER_FETCH_ERROR':
      console.log(action.error);
      return {...state, loading: false};
    default:
      return state;
  }
};
