import { MouseEvent, useCallback, useMemo } from 'react'

/* eslint-disable react/jsx-props-no-spreading */
import { useAppDispatch, useAppSelector } from 'store'

import Pad from 'components/Pad/Pad'
import Sprite, { SpriteProps } from 'components/Sprite/Sprite'
import SpriteItems from 'components/Sprite/SpriteItems'

import { initApp } from 'store/reducers/actions'
import { getFlagsCount } from 'store/reducers/board/BoardSelector'
import { getGameStatus, getMaxFlagsCount } from 'store/reducers/game/GameSelector'

import './Header.scss'

function Header() {
  const dispatch = useAppDispatch()

  const flagsCount = useAppSelector(getFlagsCount)
  const maxFlagsCount = useAppSelector(getMaxFlagsCount)

  const gameStatus = useAppSelector(getGameStatus)

  const statusClickHandler = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      dispatch(initApp())
    },
    [dispatch],
  )

  const statusSpriteProps = useMemo<SpriteProps>(() => {
    if (gameStatus === 'playing') return SpriteItems.StatusPlaying
    if (gameStatus === 'fearing') return SpriteItems.StatusFearing
    if (gameStatus === 'lose') return SpriteItems.StatusLose
    if (gameStatus === 'win') return SpriteItems.StatusWin

    return SpriteItems.StatusWaiting
  }, [gameStatus])

  return (
    <div className="header">
      <div className="header__pad">
        <Pad value={maxFlagsCount - flagsCount} />
      </div>
      <div onClick={statusClickHandler}>
        <Sprite
          className="header__status"
          {...statusSpriteProps}
        />
      </div>
      <div className="header__pad">
        <Pad value={45} />
      </div>
    </div>
  )
}

export default Header
