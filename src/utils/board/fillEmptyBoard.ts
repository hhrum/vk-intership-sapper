import Board from 'domain/Board'
import { generateEmptyCell } from 'domain/Cell'

export default function fillEmptyBoard(board: Board) {
  board.cells = new Array(board.ySize)
    .fill(null)
    .map((_, y) => new Array(board.xSize).fill(null).map((__, x) => generateEmptyCell(x, y)))

  return board
}
