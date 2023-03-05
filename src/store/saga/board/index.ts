import { all, fork } from 'redux-saga/effects'

import leftClickOnCellWatcher from './leftClickOnCellWatcher'
import rightClickOnCellWatcher from './rightClickOnCellWatcher'

export default function* BoardWatcher() {
  yield all([fork(leftClickOnCellWatcher)])
  yield all([fork(rightClickOnCellWatcher)])
}
