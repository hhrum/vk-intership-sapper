import copyBoard from 'utils/board/copyBoard'
import forEachBoardCells from 'utils/board/forEachBoardCells'
import weightOfCell from 'utils/board/weightOfCell'

import Board from 'domain/Board'

export default function calculateMinesAround(board: Board) {
  const updatedBoard = copyBoard(board)

  forEachBoardCells(board, (cell, x, y) => {
    if (cell.isMine) return
    updatedBoard.cells[y][x].minesAround = weightOfCell(board, x, y)
  })

  return updatedBoard
}
