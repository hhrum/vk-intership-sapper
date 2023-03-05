/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import checkWin from 'utils/board/checkWin'
import copyBoard from 'utils/board/copyBoard'
import generateMines from 'utils/board/generateMines'

import { leftClickOnCellAction } from 'store/reducers/board/BoardActions'
import { boardUpdated, minesGenerated } from 'store/reducers/board/BoardReducer'
import BoardSelector from 'store/reducers/board/BoardSelector'
import { gameLosed, gameStarted, gameWinned } from 'store/reducers/game/GameReducer'

import Board, { revealCell } from 'domain/Board'
import Cell, { openCell } from 'domain/Cell'
import { GameStatus } from 'domain/Game'

import { getGameStatus } from '../../reducers/game/GameSelector'

export function* leftClickOnCellWorker({ payload: cell }: PayloadAction<Cell>) {
  const gameStatus: GameStatus = yield select(getGameStatus)

  if (gameStatus === 'win' || gameStatus === 'lose' || cell.isFlag) {
    return
  }

  const board: Board = yield select(BoardSelector)
  let updatedBoard: Board = copyBoard(board)

  if (board.minesGenerated && cell.isMine) {
    updatedBoard.cells[cell.y][cell.x] = openCell({ ...cell })
    yield put(boardUpdated(updatedBoard))
    yield put(gameLosed())
    return
  }

  if (!board.minesGenerated) {
    updatedBoard = yield call(generateMines, board, 16, cell.x, cell.y)
    yield put(minesGenerated())
    yield put(gameStarted())
  }

  updatedBoard = yield call(revealCell, updatedBoard, cell.x, cell.y)

  yield put(boardUpdated(updatedBoard))

  if (checkWin(updatedBoard)) {
    yield put(gameWinned())
  }
}

export default function* leftClickOnCellWatcher() {
  yield takeEvery(leftClickOnCellAction, leftClickOnCellWorker)
}
