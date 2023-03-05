/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react'
import { useAppSelector } from 'store'

import Sprite from 'components/Sprite/Sprite'
import SpriteItems from 'components/Sprite/SpriteItems'

import { getGameStatus } from 'store/reducers/game/GameSelector'

import Cell from 'domain/Cell'

import './CellSprite.scss'

interface CellSpriteProps {
  cell: Cell
}

function CellSprite({ cell }: CellSpriteProps) {
  const gameStatus = useAppSelector(getGameStatus)

  const props = useMemo(() => {
    if (cell.isOpen && cell.isMine) {
      return SpriteItems.CellMineDitaneted
    }
    if ((gameStatus === 'lose' || gameStatus === 'win') && cell.isMine) {
      return SpriteItems.CellMine
    }

    if (cell.isFlag) {
      return SpriteItems.CellFlag
    }
    if (cell.isQuest) {
      return SpriteItems.CellQuest
    }

    if (!cell.isOpen) return SpriteItems.CellClose

    if (cell.minesAround) {
      if (cell.minesAround > 0 && cell.minesAround < 9) {
        const minesCount = cell.minesAround as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
        return SpriteItems.MineCount[minesCount]
      }
    }

    return SpriteItems.CellOpen
  }, [cell.isFlag, cell.isMine, cell.isOpen, cell.isQuest, cell.minesAround, gameStatus])

  return <Sprite {...props} />
}

export default CellSprite
