import { put, takeEvery, delay } from 'redux-saga/effects';
import { increment } from '../reducers/counter';

function* asyncIncrement() {
  yield delay(1000);
  yield put(increment());
}

export default function*() {
  yield takeEvery('COUNTER/ASYNC/INCREMENT/START', asyncIncrement);
}
