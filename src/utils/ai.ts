import { PieceTheme, StepsItem } from '../hooks/useGobangProgram/interface';
import { findEmptySeat } from './findEmptySeat';
import { hasNum } from './hasNum';

/**
 * 电脑根据对弈情况决策出下一步坐标
 * @param steps 已走步骤
 * @param board 棋盘
 */
export function aiDecision(steps: StepsItem[], board: PieceTheme[][]) {
  const newStep = [...steps];
  const lastStep = newStep.pop(); // 对手的最后一步
  const aiLastStep = newStep.pop(); // 电脑的最后一步
  let nextStep = [0, 0];

  // 防守
  if (lastStep) {
    // 如果对手有下，则计算最后一步是否构成威胁
    const { position, theme } = lastStep;
    const { result, direction } = hasNum(position, theme, 3, board);
    if (result) {
      // 如果构成威胁则防守，否则进攻
      const [row, col] = position;
      const empty = findEmptySeat(row, col, direction, board);
      if (empty) {
        nextStep = empty;
      }
    }
  }

  // 进攻
  if (aiLastStep) {
    // 电脑有下，则计算最后一步是否能构成威胁
    const { position, theme } = aiLastStep;
    const { result, direction } = hasNum(position, theme, 3, board);
    if (result) {
      // 如果能构成威胁，先下威胁棋
      const [row, col] = position;
      const empty = findEmptySeat(row, col, direction, board);
      if (empty) {
        nextStep = empty;
      }
    }
  }

  // 如果上面的判断都未生效，就随便下一个空位
  if (nextStep[0] === 0 && nextStep[1] === 0) {
    const row = board.findIndex((i) => i.some((j) => j === 0));
    const col = board[row].findIndex((i) => i === 0);
    nextStep = [row, col];
  }
  return nextStep;
}
