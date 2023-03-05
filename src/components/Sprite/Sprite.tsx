import classNames from 'classnames'

import './Sprite.scss'

export interface SpriteSize {
  width: number
  height: number
}

export interface SpritePosition {
  x: number
  y: number
}

export interface SpriteProps {
  // eslint-disable-next-line react/require-default-props
  className?: string

  size: SpriteSize
  position: SpritePosition
}

function Sprite({ className = '', size, position }: SpriteProps) {
  const style = {
    width: `${size.width}px`,
    height: `${size.height}px`,

    backgroundPosition: `-${position.x}px -${position.y}px`,
  }

  const SpriteClassName = classNames('sprite', className)

  return (
    <div
      className={SpriteClassName}
      style={style}
    />
  )
}

export default Sprite
