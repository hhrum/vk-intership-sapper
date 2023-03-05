export type GameStatus = 'waiting' | 'playing' | 'fearing' | 'lose' | 'win'

export default interface Game {
  maxFlagsCount: number
  status: GameStatus
  timer: number
}
