/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction } from '@reduxjs/toolkit'
import { put, select, takeEvery } from 'redux-saga/effects'
import copyBoard from 'utils/board/copyBoard'

import { rightClickOnCellAction } from 'store/reducers/board/BoardActions'
import { boardUpdated } from 'store/reducers/board/BoardReducer'
import BoardSelector from 'store/reducers/board/BoardSelector'
import { getGameStatus } from 'store/reducers/game/GameSelector'

import Board from 'domain/Board'
import Cell, { cleanMarksOfCell, markCellByFlag, markCellByQuest } from 'domain/Cell'
import { GameStatus } from 'domain/Game'

import { getFlagsCount } from '../../reducers/board/BoardSelector'
import { getMaxFlagsCount } from '../../reducers/game/GameSelector'

export function* rightClickOnCellWorker({ payload: cell }: PayloadAction<Cell>) {
  const gameStatus: GameStatus = yield select(getGameStatus)

  if (gameStatus === 'win' || gameStatus === 'lose') {
    return
  }

  const board: Board = yield select(BoardSelector)
  const updatedBoard: Board = copyBoard(board)

  if (cell.isOpen) {
    return
  }

  const flagsCount: number = yield select(getFlagsCount)
  const maxFlagsCount: number = yield select(getMaxFlagsCount)

  if (cell.isFlag) {
    updatedBoard.cells[cell.y][cell.x] = markCellByQuest({ ...cell })
  } else if (cell.isQuest) {
    updatedBoard.cells[cell.y][cell.x] = cleanMarksOfCell({ ...cell })
  } else if (maxFlagsCount - flagsCount !== 0) {
    updatedBoard.cells[cell.y][cell.x] = markCellByFlag({ ...cell })
  }

  yield put(boardUpdated(updatedBoard))
}

export default function* rightClickOnCellWatcher() {
  yield takeEvery(rightClickOnCellAction, rightClickOnCellWorker)
}
