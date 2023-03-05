/* eslint-disable no-continue */
import copyBoard from 'utils/board/copyBoard'
import outOfBoardRange from 'utils/board/outOfBoardRange'

import Cell, { openCell } from './Cell'

export default interface Board {
  xSize: number
  ySize: number
  // [y][x]
  cells: Cell[][]
  minesGenerated: boolean
}

export const revealCell = (board: Board, x: number, y: number): Board => {
  let updatedBoard: Board = copyBoard(board)

  if (outOfBoardRange(updatedBoard, x, y)) return board
  if (updatedBoard.cells[y][x].isOpen) return board
  if (updatedBoard.cells[y][x].isMine) return board
  if (updatedBoard.cells[y][x].isFlag) return board

  updatedBoard.cells[y][x] = openCell({ ...board.cells[y][x] })

  if (updatedBoard.cells[y][x].minesAround !== 0) return updatedBoard

  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (i === j && i === 0) continue
      updatedBoard = revealCell(updatedBoard, x + i, y + j)
    }
  }

  return updatedBoard
}
