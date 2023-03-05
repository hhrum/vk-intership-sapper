import Board from 'domain/Board'
import Cell from 'domain/Cell'

export default function forEachBoardCells(
  board: Board,
  callback: (cell: Cell, x: number, y: number) => void,
) {
  for (let j = 0; j < board.cells.length; j += 1) {
    for (let i = 0; i < board.cells[j].length; i += 1) {
      callback(board.cells[j][i], i, j)
    }
  }
}
