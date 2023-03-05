/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react'

import Sprite from 'components/Sprite/Sprite'
import SpriteItems from 'components/Sprite/SpriteItems'

import Cell from 'domain/Cell'

import './CellSprite.scss'

interface CellSpriteProps {
  cell: Cell
}

function CellSprite({ cell }: CellSpriteProps) {
  const props = useMemo(() => {
    if (!cell.isOpen) return SpriteItems.CellClose

    return SpriteItems.CellOpen
  }, [cell])

  return <Sprite {...props} />
}

export default CellSprite
