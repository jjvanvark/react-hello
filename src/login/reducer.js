const initialState = {
  usernameField: '',
  passwordField: '',
  disabled: false,
  help: '',
  focus: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {...state, usernameField: action.payload};
    case 'SET_PASSWORD':
      return {...state, passwordField: action.payload};
    case 'CHECK_LOGIN':
      return state;
    default:
      return state;
  }
};
