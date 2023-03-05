import { createAction } from '@reduxjs/toolkit'

import Cell from 'domain/Cell'

export const leftClickOnCellAction = createAction<Cell>('board/leftClickOnCellAction')
export const rightClickOnCellAction = createAction<Cell>('board/rightClickOnCellAction')
