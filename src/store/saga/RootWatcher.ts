import { all, call, spawn } from 'redux-saga/effects'

import BoardWatcher from './board'

export default function* RootWatcher() {
  yield call(console.log, 'hello, saga!')

  yield all([spawn(BoardWatcher)])
}
