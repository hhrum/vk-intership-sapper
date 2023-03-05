export default interface Cell {
  x: number
  y: number
  isMine: 0 | 1
  isOpen: boolean
  isFlag: 0 | 1
  isQuest: boolean
  mineAround?: number
}

export const openCell = (cell: Cell): Cell => {
  cell.isOpen = true
  cell.isFlag = 0
  cell.isQuest = false
  return cell
}

export const markCellByFlag = (cell: Cell): Cell => {
  if (cell.isOpen) return cell
  cell.isFlag = 1
  cell.isQuest = false
  return cell
}

export const markCellByQuest = (cell: Cell): Cell => {
  if (cell.isOpen) return cell
  cell.isFlag = 0
  cell.isQuest = true
  return cell
}

export const cleanMarksOfCell = (cell: Cell): Cell => {
  cell.isFlag = 0
  cell.isQuest = false
  return cell
}

export const generateEmptyCell = (x: number, y: number): Cell => ({
  x,
  y,
  isMine: 0,
  isOpen: false,
  isFlag: 0,
  isQuest: false,
})
