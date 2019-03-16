import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as counter from '../modules/counter';

const mapStateToProps = state => ({
  count: state.counter,
});

const mapDispatchToProps = {
  onClickIncrement: counter.increment,
  onClickAsyncIncrement: counter.asyncIncrementStart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
