import { put, takeEvery, delay } from 'redux-saga/effects';
import * as counter from '../modules/counter';

function* asyncIncrement() {
  yield delay(1000);
  yield put(counter.increment());
}

export default function*() {
  yield takeEvery(counter.ASYNC_INCREMENT_START, asyncIncrement);
}
