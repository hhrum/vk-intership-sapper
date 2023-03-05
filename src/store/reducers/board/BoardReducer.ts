import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import fillEmptyBoard from 'utils/board/fillEmptyBoard'

import Cell, { openCell } from 'domain/Cell'

import { initApp } from '../actions'
import BoardState from './BoardState'

const boardSlice = createSlice({
  name: 'board',
  initialState: BoardState,
  reducers: {
    openCellReducer(state, { payload: cell }: PayloadAction<Cell>) {
      state.cells[cell.y][cell.x] = openCell({ ...cell })
    },
  },
  extraReducers(builder) {
    builder.addCase(initApp, (state) => {
      const { cells } = fillEmptyBoard({ ...state })
      state.cells = cells
    })
  },
})

export const { openCellReducer: openCellAction } = boardSlice.actions

export default boardSlice.reducer
