import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {increment, decrement, counterFetchData} from '../counter/actions';

class Counter extends Component {
  componentDidMount() {
    this.props.hello();
  }
  render() {
    const {amount, loading, increment, decrement, hello} = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <h2>
          Counter <span>{amount}</span>
        </h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={hello}>Hello Async</button>
      </div>
    );
  }
}

Counter.propTypes = {
  amount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  hello: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  amount: state.counter.amount,
  loading: state.counter.loading,
});

const mapDispatchToProps = dispatch => ({
  increment: e => dispatch(increment(1)),
  decrement: e => dispatch(decrement(1)),
  hello: () => dispatch(counterFetchData('http://localhost:4000/data.json')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
