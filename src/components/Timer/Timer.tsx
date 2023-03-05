import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import Pad from 'components/Pad/Pad'

import { decrementTimer, gameLosed } from 'store/reducers/game/GameReducer'
import { getGameStatus, getTimer } from 'store/reducers/game/GameSelector'

function Timer() {
  const dispatch = useAppDispatch()
  const gameStatus = useAppSelector(getGameStatus)
  const time = useAppSelector(getTimer)
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (gameStatus !== 'playing') {
      return () => null
    }

    if (time <= 0) {
      dispatch(gameLosed())
      return () => null
    }

    const newTimer = setTimeout(() => dispatch(decrementTimer()), 1000)
    setTimer(newTimer)

    return () => {
      if (newTimer) {
        clearTimeout(newTimer)
      }
    }
  }, [dispatch, gameStatus, time])

  useEffect(() => {
    if (gameStatus !== 'playing' && timer) {
      clearTimeout(timer)
      setTimer(null)
    }
  }, [gameStatus, timer])

  return <Pad value={time} />
}

export default Timer
