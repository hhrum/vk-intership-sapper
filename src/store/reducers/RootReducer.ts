import { combineReducers } from '@reduxjs/toolkit'

import board from './board'
import game from './game'

const rootReducer = combineReducers({
  game,
  board,
})

export default rootReducer
