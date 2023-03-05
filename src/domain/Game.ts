type GameStatus = 'waiting' | 'playing' | 'holding' | 'lose' | 'win'

export default interface Game {
  maxFlagsCount: number
  status: GameStatus
  timer: number
}
