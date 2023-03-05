/* eslint-disable react/jsx-props-no-spreading */
import { MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import CellSprite from 'components/CellSprite/CellSprite'

import { openCellAction } from 'store/reducers/board/BoardReducer'
import { getBoardCell } from 'store/reducers/board/BoardSelector'

import './BoardCell.scss'

interface BoardCellProps {
  rowIndex: number
  cellIndex: number
}

function BoardCell({ rowIndex, cellIndex }: BoardCellProps) {
  const dispatch = useAppDispatch()
  const cell = useAppSelector(getBoardCell(rowIndex, cellIndex))

  const leftClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (!cell) return
    if (cell.isOpen) return

    dispatch(openCellAction(cell))
    console.log('left click')
  }

  const rightClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('right click')
  }

  if (!cell) return null

  return (
    <div
      className="board-cell"
      onClick={leftClickHandler}
      onContextMenu={rightClickHandler}
    >
      <CellSprite cell={cell} />
    </div>
  )
}

export default BoardCell
