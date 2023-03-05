import Board from 'domain/Board'
import Cell from 'domain/Cell'

export default function forEachBoardCells(
  board: Board,
  callback: (cell: Cell, x: number, y: number) => void,
) {
  for (let i = 0; i < board.xSize; i += 1) {
    for (let j = 0; j < board.ySize; j += 1) {
      callback(board.cells[j][i], i, j)
    }
  }
}
