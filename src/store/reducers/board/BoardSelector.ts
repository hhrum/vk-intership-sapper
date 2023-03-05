import { createSelector } from '@reduxjs/toolkit'
import getCountFlagsOnBoard from 'utils/board/getCountFlagsOnBoard'

import { RootState } from 'store/index'

import Board from 'domain/Board'

const BoardSelector = (state: RootState): Board => state.board

export const getBoardRows = createSelector(BoardSelector, (board) => board.cells)

export const getBoardRow = (rowIndex: number) =>
  createSelector(getBoardRows, (rows) => (rowIndex < rows.length ? rows[rowIndex] : null))

export const getBoardCell = (rowIndex: number, cellIndex: number) =>
  createSelector(getBoardRow(rowIndex), (cells) =>
    cells && cellIndex < cells.length ? cells[cellIndex] : null,
  )

export const getFlagsCount = createSelector(BoardSelector, (board) => getCountFlagsOnBoard(board))

export default BoardSelector
