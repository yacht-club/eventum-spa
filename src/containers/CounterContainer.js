import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { asyncIncrementStart, increment } from '../reducers/counter';

const mapStateToProps = state => ({
  count: state.counter,
});

const mapDispatchToProps = {
  onClickIncrement: increment,
  onClickAsyncIncrement: asyncIncrementStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
