import Board from 'domain/Board'

import calculateMinesAround from './calculateMinesAround'
import copyBoard from './copyBoard'

export default function generateMines(
  board: Board,
  minesCount: number,
  ignoreX: number,
  ignoreY: number,
): Board {
  const updatedBoard = copyBoard(board)
  const minePositions: [number, number][] = []

  for (let counter = 0; counter < minesCount; counter += 1) {
    let reload = false
    let randomX: number
    let randomY: number

    do {
      reload = false
      randomX = Math.floor(Math.random() * board.xSize)
      randomY = Math.floor(Math.random() * board.ySize)

      if (
        (randomX === ignoreX && randomY === ignoreY) ||
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        minePositions.some(([x, y]) => randomX === x && randomY === y)
      ) {
        reload = true
      }
    } while (reload)

    minePositions.push([randomX, randomY])
  }

  minePositions.forEach(([x, y]) => {
    updatedBoard.cells[y][x].isMine = 1
  })

  return calculateMinesAround(updatedBoard)
}
