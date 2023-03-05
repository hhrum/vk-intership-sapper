import Board from 'domain/Board'

export default function copyBoard(board: Board): Board {
  return JSON.parse(JSON.stringify(board)) as Board
}
