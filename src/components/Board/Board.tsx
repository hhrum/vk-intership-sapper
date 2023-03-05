/* eslint-disable react/no-array-index-key */
import { useAppSelector } from 'store'

import BoardRow from 'components/BoardRow/BoardRow'

import { getBoardRows } from 'store/reducers/board/BoardSelector'

function Board() {
  const rows = useAppSelector(getBoardRows)

  return (
    <>
      {rows.map((_, i) => (
        <BoardRow
          key={i}
          rowIndex={i}
        />
      ))}
    </>
  )
}

export default Board
