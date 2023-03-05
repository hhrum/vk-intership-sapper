/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useMemo } from 'react'

import Sprite, { SpriteProps } from 'components/Sprite/Sprite'
import SpriteItems from 'components/Sprite/SpriteItems'

import './Pad.scss'

interface PadProps {
  value: number
}

function Pad({ value }: PadProps) {
  const getProps = useCallback((num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9): SpriteProps => {
    if (num >= 0 && num <= 9) {
      return SpriteItems.Pad[num]
    }

    return SpriteItems.Pad[0]
  }, [])

  const pads = useMemo(
    () =>
      value
        .toString()
        .padStart(3, '0')
        .split('')
        .map((num, i) => (
          <Sprite
            // eslint-disable-next-line react/no-array-index-key
            key={i.toString() + num}
            {...getProps(+num as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)}
          />
        )),
    [value, getProps],
  )

  return <div className="pad">{pads}</div>
}

export default Pad
