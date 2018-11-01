import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {increment, decrement} from '../counter/actions';

class Counter extends Component {
  render() {
    const {amount, increment, decrement} = this.props;
    return (
      <div>
        <h2>
          Counter <span>{amount}</span>
        </h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  amount: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  amount: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: e => dispatch(increment(1)),
  decrement: e => dispatch(decrement(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
