import { createSlice } from '@reduxjs/toolkit'

import { initApp } from '../actions'
import GameState from './GameState'

const gameSlice = createSlice({
  name: 'game',
  initialState: GameState,
  reducers: {
    gameStarted(state) {
      state.status = 'playing'
    },
    gameLosed(state) {
      state.status = 'lose'
    },
    gameWinned(state) {
      state.status = 'win'
    },
    gameFeared(state) {
      state.status = 'fearing'
    },

    decrementTimer(state) {
      state.timer -= 1
    },
  },
  extraReducers(builder) {
    builder.addCase(initApp, (state) => {
      state.maxFlagsCount = GameState.maxFlagsCount
      state.status = GameState.status
      state.timer = GameState.timer
    })
  },
})

export const { gameStarted, gameLosed, gameWinned, gameFeared, decrementTimer } = gameSlice.actions

export default gameSlice.reducer
