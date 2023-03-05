/* eslint-disable no-continue */
import forEachBoardCells from 'utils/board/forEachBoardCells'

import Cell, { openCell } from './Cell'

export default interface Board {
  xSize: number
  ySize: number
  // [y][x]
  cells: Cell[][]
}

const outOfRange = (board: Board, x: number, y: number) =>
  x < 0 || x >= board.xSize || y < 0 || y >= board.ySize

export const weightOfCell = (board: Board, x: number, y: number): number => {
  let weight = 0

  for (let i = -1; i <= 1; i += 1) {
    if (outOfRange(board, x + i, y)) continue
    for (let j = -1; j <= 1; j += 1) {
      if (outOfRange(board, x + i, y + y)) continue
      weight += board.cells[y + j][x + i].isMine
    }
  }

  return weight
}

export const revealCell = (board: Board, x: number, y: number): Board => {
  let updatedBoard: Board = { ...board }

  if (outOfRange(updatedBoard, x, y)) return updatedBoard
  if (updatedBoard.cells[y][x].isOpen) return updatedBoard
  if (updatedBoard.cells[y][x].isMine) return updatedBoard

  updatedBoard.cells[y][x] = openCell(board.cells[y][x])

  if (weightOfCell(updatedBoard, x, y) !== 0) return updatedBoard

  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (x === y && x === 0) continue

      updatedBoard = revealCell(updatedBoard, x + i, y + j)
    }
  }

  return updatedBoard
}

export const getCountFlagsOnBoard = (board: Board): number => {
  let count = 0

  forEachBoardCells(board, (cell) => {
    count += cell.isFlag
  })

  return count
}
