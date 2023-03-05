/* eslint-disable react/no-array-index-key */
import { useAppSelector } from 'store'

import BoardCell from 'components/BoardCell/BoardCell'

import { getBoardRow } from 'store/reducers/board/BoardSelector'

import './BoardRow.scss'

interface BoardRowProps {
  rowIndex: number
}

function BoardRow({ rowIndex }: BoardRowProps) {
  const row = useAppSelector(getBoardRow(rowIndex))

  return (
    <div className="board-row">
      {row?.map((_, i) => (
        <BoardCell
          key={i}
          rowIndex={rowIndex}
          cellIndex={i}
        />
      ))}
    </div>
  )
}

export default BoardRow
