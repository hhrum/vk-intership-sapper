import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'store/index'

const GameSelector = (state: RootState) => state.game

export const getGameStatus = createSelector(GameSelector, (game) => game.status)
export const getMaxFlagsCount = createSelector(GameSelector, (game) => game.maxFlagsCount)

export default GameSelector
