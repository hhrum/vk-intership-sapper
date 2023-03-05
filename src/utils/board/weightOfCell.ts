/* eslint-disable no-continue */
import Board from 'domain/Board'

import outOfBoardRange from './outOfBoardRange'

export default function weightOfCell(board: Board, x: number, y: number): number {
  let weight = 0

  for (let i = -1; i <= 1; i += 1) {
    if (outOfBoardRange(board, x + i, y)) continue
    for (let j = -1; j <= 1; j += 1) {
      if (outOfBoardRange(board, x + i, y + j)) continue
      weight += board.cells[y + j][x + i].isMine
    }
  }

  return weight
}
