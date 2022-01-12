import { PieceTheme } from '../hooks/useGobangProgram/interface';

/**
 * 判断某棋子的某方向是否有空位
 * @param row 棋子row
 * @param col 棋子col
 * @param direction 方向
 * @param board 棋盘
 */
export function findEmptySeat(
  row: number,
  col: number,
  direction: string,
  board: PieceTheme[][]
) {
  if (direction === 'upAndDown') {
    if (board[row + 1][col] === PieceTheme.transparent) {
      return [row + 1, col];
    } else if (board[row - 1][col] === PieceTheme.transparent) {
      return [row - 1, col];
    }
  } else if (direction === 'leftAndRight') {
    if (board[row][col + 1] === PieceTheme.transparent) {
      return [row, col + 1];
    } else if (board[row][col - 1] === PieceTheme.transparent) {
      return [row, col - 1];
    }
  } else if (direction === 'leftAndUp') {
    if (board[row - 1][col + 1] === PieceTheme.transparent) {
      return [row - 1, col + 1];
    } else if (board[row + 1][col - 1] === PieceTheme.transparent) {
      return [row + 1, col - 1];
    }
  } else if (direction === 'rightAndUp') {
    if (board[row + 1][col + 1] === PieceTheme.transparent) {
      return [row + 1, col + 1];
    } else if (board[row - 1][col - 1] === PieceTheme.transparent) {
      return [row - 1, col - 1];
    }
  }
}
