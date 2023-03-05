import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import fillEmptyBoard from 'utils/board/fillEmptyBoard'

import Board from 'domain/Board'
import Cell from 'domain/Cell'

import { initApp } from '../actions'
import BoardState from './BoardState'

const boardSlice = createSlice({
  name: 'board',
  initialState: BoardState,
  reducers: {
    minesGenerated(state) {
      state.minesGenerated = true
    },
    boardUpdated(state, { payload: board }: PayloadAction<Board>) {
      state.cells = board.cells
    },
    cellChanged(state, { payload: cell }: PayloadAction<Cell>) {
      state.cells[cell.y][cell.x] = cell
    },
  },
  extraReducers(builder) {
    builder.addCase(initApp, (state) => {
      const { cells } = fillEmptyBoard({ ...state })
      state.cells = cells
      state.minesGenerated = false
    })
  },
})

export const { minesGenerated, boardUpdated, cellChanged } = boardSlice.actions

export default boardSlice.reducer
