import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'store/index'

const BoardSelector = (state: RootState) => state.board

export const getBoardRows = createSelector(BoardSelector, (board) => board.cells)

export const getBoardRow = (rowIndex: number) =>
  createSelector(getBoardRows, (rows) => (rowIndex < rows.length ? rows[rowIndex] : null))

export const getBoardCell = (rowIndex: number, cellIndex: number) =>
  createSelector(getBoardRow(rowIndex), (cells) =>
    cells && cellIndex < cells.length ? cells[cellIndex] : null,
  )

export default BoardSelector
