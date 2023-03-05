import { combineReducers } from '@reduxjs/toolkit'

import board from './board'

const rootReducer = combineReducers({
  board,
})

export default rootReducer
