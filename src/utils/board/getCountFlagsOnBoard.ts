import Board from 'domain/Board'

import forEachBoardCells from './forEachBoardCells'

export default function getCountFlagsOnBoard(board: Board): number {
  if (!board.cells.length) {
    return 0
  }

  let count = 0

  forEachBoardCells(board, (cell) => {
    if (!cell) return
    count += cell.isFlag
  })

  return count
}
