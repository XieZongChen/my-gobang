import { PieceTheme } from '../hooks/useGobangProgram/interface';

/**
 * 计算是否有 num 个相连棋子
 * @param newStep 所寻找棋子的定位
 * @param newTheme 所寻找棋子的颜色
 * @param num 要计算几个相连
 * @param board 记录当前对弈情况的棋盘
 * @returns result 是否有相连num子的情况
 * @returns direction 相连方位
 */
export function hasNum(
  newStep: [number, number],
  newTheme: PieceTheme,
  num: number,
  board: number[][]
) {
  let upAndDown = 0; // 上下方向
  let leftAndRight = 0; // 左右方向
  let leftAndUp = 0; // 左上右下
  let rightAndUp = 0; // 右上左下
  const [row, col] = newStep;
  //***************左右方向*************
  //先从点击的位置向左寻找，相同颜色的棋子leftAndRight自加，直到不是相同颜色的棋子，则跳出循环
  for (let i = col; i >= 0; i--) {
    if (board[row][i] !== newTheme) {
      break;
    }
    leftAndRight++;
  }
  //然后从点击的位置向右下一个位置寻找，相同颜色的棋子leftAndRight自加，直到不是相同颜色的棋子，则跳出循环
  for (let i = col + 1; i < 15; i++) {
    if (board[row][i] != newTheme) {
      break;
    }
    leftAndRight++;
  }
  //****************上下方向************
  for (let i = row; i >= 0; i--) {
    if (board[i][col] != newTheme) {
      break;
    }
    upAndDown++;
  }
  for (let i = row + 1; i < 15; i++) {
    if (board[i][col] != newTheme) {
      break;
    }
    upAndDown++;
  }
  //****************右上到左下斜方向*************
  for (let i = 0; i < 15; i++) {
    if (row - i < 0 || col - i < 0 || board[row - i][col - i] != newTheme) {
      break;
    }
    rightAndUp++;
  }
  for (let i = 1; i < 15; i++) {
    if (row + i > 15 || col + i > 15 || board[row + i][col + i] != newTheme) {
      break;
    }
    rightAndUp++;
  }
  //****************左上到右下斜方向***********
  for (let i = 0; i < 15; i++) {
    if (row - i < 0 || col + i > 15 || board[row - i][col + i] != newTheme) {
      break;
    }
    leftAndUp++;
  }
  for (let i = 1; i < 15; i++) {
    if (row + i > 15 || col - i < 0 || board[row + i][col - i] != newTheme) {
      break;
    }
    leftAndUp++;
  }
  console.log('upAndDown', upAndDown);
  console.log('leftAndRight', leftAndRight);
  console.log('leftAndUp', leftAndUp);
  console.log('rightAndUp', rightAndUp);

  if (upAndDown >= num) {
    return { result: true, direction: 'upAndDown' };
  } else if (leftAndRight >= num) {
    return { result: true, direction: 'leftAndRight' };
  } else if (leftAndUp >= num) {
    return { result: true, direction: 'leftAndUp' };
  } else if (rightAndUp >= num) {
    return { result: true, direction: 'rightAndUp' };
  }
  return { result: false, direction: '' };
}
