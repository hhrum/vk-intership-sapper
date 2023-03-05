import Board from 'domain/Board'

export default function outOfBoardRange(board: Board, x: number, y: number): boolean {
  return x < 0 || x >= board.xSize || y < 0 || y >= board.ySize
}
