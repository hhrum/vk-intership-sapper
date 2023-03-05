import Board from 'domain/Board'

import forEachBoardCells from './forEachBoardCells'

export default function checkWin(board: Board) {
  let isWin = true

  forEachBoardCells(board, (cell) => {
    if (!isWin) return
    if (!cell.isOpen && !cell.isMine) {
      isWin = false
    }
  })

  return isWin
}
