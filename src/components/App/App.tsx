/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import { useAppDispatch } from 'store'

import Board from 'components/Board/Board'
import Sprite from 'components/Sprite/Sprite'
import SpriteItems from 'components/Sprite/SpriteItems'

import { initApp } from 'store/reducers/actions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initApp())
  }, [dispatch])

  return (
    <div>
      <div>App</div>
      <Sprite {...SpriteItems.Pad1} />
      <Sprite {...SpriteItems.Pad2} />
      <Sprite {...SpriteItems.Pad3} />
      <Sprite {...SpriteItems.Pad4} />
      <Sprite {...SpriteItems.Pad5} />
      <Sprite {...SpriteItems.Pad6} />
      <Sprite {...SpriteItems.Pad7} />
      <Sprite {...SpriteItems.Pad8} />
      <Sprite {...SpriteItems.Pad9} />
      <Sprite {...SpriteItems.Pad0} />

      <Sprite {...SpriteItems.StatusWaiting} />
      <Sprite {...SpriteItems.StatusPlaying} />
      <Sprite {...SpriteItems.StatusFearing} />
      <Sprite {...SpriteItems.StatusLose} />
      <Sprite {...SpriteItems.StatusWin} />

      <Sprite {...SpriteItems.CellClose} />
      <Sprite {...SpriteItems.CellOpen} />
      <Sprite {...SpriteItems.CellFlag} />
      <Sprite {...SpriteItems.CellQuest} />
      <Sprite {...SpriteItems.CellQuestOpen} />
      <Sprite {...SpriteItems.CellMine} />
      <Sprite {...SpriteItems.CellMineDitaneted} />
      <Sprite {...SpriteItems.CellMineDetected} />

      <Sprite {...SpriteItems.MineCount1} />
      <Sprite {...SpriteItems.MineCount2} />
      <Sprite {...SpriteItems.MineCount3} />
      <Sprite {...SpriteItems.MineCount4} />
      <Sprite {...SpriteItems.MineCount5} />
      <Sprite {...SpriteItems.MineCount6} />
      <Sprite {...SpriteItems.MineCount7} />
      <Sprite {...SpriteItems.MineCount8} />
      <div>
        <Board />
      </div>
    </div>
  )
}

export default App
