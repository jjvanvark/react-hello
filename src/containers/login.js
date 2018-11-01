import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setUsername, setPassword, check} from '../login/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const {focus} = this.props;
    const {focus: wasFocus} = prevProps;

    if (focus === 'username' && wasFocus !== 'username') {
      this.usernameRef.current.focus();
    }
  }

  render() {
    const {
      username,
      password,
      isDisabled,
      help,
      setUsername,
      setPassword,
      onEnterCheck,
      check,
    } = this.props;
    return (
      <div>
        <h2>Login!</h2>
        <input
          type="email"
          disabled={isDisabled}
          value={username}
          onChange={setUsername}
          onKeyPress={onEnterCheck}
          ref={this.usernameRef}
          autoFocus
        />
        <input
          type="password"
          disabled={isDisabled}
          value={password}
          onChange={setPassword}
          onKeyPress={onEnterCheck}
        />
        <p
          className={`login__help ${help === '' ? 'login__help--hidden' : ''}`}>
          {help}
        </p>
        <button onClick={check}>login</button>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  help: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  onEnterCheck: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
  focus: PropTypes.string,
};

const mapStateToProps = state => ({
  username: state.login.usernameField,
  password: state.login.passwordField,
  isDisabled: state.login.disabled,
  help: state.login.help,
  focus: state.login.focus,
});

const mapDispatchToProps = dispatch => ({
  setUsername: e => dispatch(setUsername(e.target.value)),
  setPassword: e => dispatch(setPassword(e.target.value)),
  onEnterCheck: e => {
    if (e.key === 'Enter') {
      dispatch(check());
    }
  },
  check: e => dispatch(check()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
