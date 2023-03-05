import SpriteSizes from 'components/Sprite/SpriteSizes'

import { SpriteProps, SpriteSize } from './Sprite'

const generateSpriteProps = (size: SpriteSize, x: number, y: number): SpriteProps => ({
  size,
  position: {
    x,
    y,
  },
})

export default {
  Pad: {
    1: generateSpriteProps(SpriteSizes.NumberOfPad, 0, 0),
    2: generateSpriteProps(SpriteSizes.NumberOfPad, 14, 0),
    3: generateSpriteProps(SpriteSizes.NumberOfPad, 28, 0),
    4: generateSpriteProps(SpriteSizes.NumberOfPad, 42, 0),
    5: generateSpriteProps(SpriteSizes.NumberOfPad, 56, 0),
    6: generateSpriteProps(SpriteSizes.NumberOfPad, 70, 0),
    7: generateSpriteProps(SpriteSizes.NumberOfPad, 84, 0),
    8: generateSpriteProps(SpriteSizes.NumberOfPad, 98, 0),
    9: generateSpriteProps(SpriteSizes.NumberOfPad, 112, 0),
    0: generateSpriteProps(SpriteSizes.NumberOfPad, 126, 0),
  },

  StatusWaiting: generateSpriteProps(SpriteSizes.GameStatus, 0, 24),
  StatusPlaying: generateSpriteProps(SpriteSizes.GameStatus, 27, 24),
  StatusFearing: generateSpriteProps(SpriteSizes.GameStatus, 54, 24),
  StatusWin: generateSpriteProps(SpriteSizes.GameStatus, 81, 24),
  StatusLose: generateSpriteProps(SpriteSizes.GameStatus, 108, 24),

  CellClose: generateSpriteProps(SpriteSizes.Cell, 0, 51),
  CellOpen: generateSpriteProps(SpriteSizes.Cell, 17, 51),
  CellFlag: generateSpriteProps(SpriteSizes.Cell, 34, 51),
  CellQuest: generateSpriteProps(SpriteSizes.Cell, 51, 51),
  CellQuestOpen: generateSpriteProps(SpriteSizes.Cell, 68, 51),
  CellMine: generateSpriteProps(SpriteSizes.Cell, 85, 51),
  CellMineDitaneted: generateSpriteProps(SpriteSizes.Cell, 102, 51),
  CellMineDetected: generateSpriteProps(SpriteSizes.Cell, 119, 51),

  MineCount: {
    1: generateSpriteProps(SpriteSizes.Cell, 0, 68),
    2: generateSpriteProps(SpriteSizes.Cell, 17, 68),
    3: generateSpriteProps(SpriteSizes.Cell, 34, 68),
    4: generateSpriteProps(SpriteSizes.Cell, 51, 68),
    5: generateSpriteProps(SpriteSizes.Cell, 68, 68),
    6: generateSpriteProps(SpriteSizes.Cell, 85, 68),
    7: generateSpriteProps(SpriteSizes.Cell, 102, 68),
    8: generateSpriteProps(SpriteSizes.Cell, 119, 68),
  },
}
