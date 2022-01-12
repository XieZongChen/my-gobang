import { computed, nextTick, Ref, ref, watchEffect } from 'vue';
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { getBoard, reversePiece } from '../../utils/utils';
import { hasNum } from '../../utils/hasNum';
import { PieceTheme, StepsItem, UseProp } from './interface';
import { aiDecision } from '../../utils/ai';

export function useGobangProgram({ handleVictoryMsg }: UseProp) {
  //**--------------------------------- 状态区域 ------------------------------------**/

  // 是否为人机
  const isOpenAIRef = ref(false);

  // 人机状态下人机是否先手
  const isAIFirstRef = ref(false);

  // 电脑棋子颜色
  const aiThemeRef = computed(() =>
    isAIFirstRef.value ? PieceTheme.black : PieceTheme.white
  );

  // 是否结束（认输和胜利都意味结束，结束状态下棋盘不清空）
  const isEndRef = ref(false);

  // 棋盘数据记录，0：无落子，1：黑，2：白
  const boardRef: Ref<PieceTheme[][]> = ref(getBoard());

  // 步骤记录，index + 1 为步骤
  const stepsRef: Ref<StepsItem[]> = ref([]);

  // 悔棋记录，结构同步骤记录
  const regretsRef: Ref<StepsItem[]> = ref([]);

  // 执棋方
  const nowThemeRef = computed(() => {
    const { value: steps } = stepsRef;
    const length = steps.length;
    if (!length) return PieceTheme.black;
    return reversePiece(steps[length - 1].theme);
  });

  // 获胜者
  const winnerRef = computed(() => reversePiece(nowThemeRef.value));

  //**--------------------------------- 事件区域 ------------------------------------**/
  // 点击棋子事件
  function handleClickPiece(row: number, col: number) {
    boardRef.value[row][col] = nowThemeRef.value;
    stepsRef.value.push({
      position: [row, col],
      theme: nowThemeRef.value,
    });
    if (regretsRef.value.length) {
      // 如果此时有悔棋记录，应该清除悔棋记录
      regretsRef.value = [];
    }
  }

  // 点击清盘事件(初始化)
  function handleClear() {
    boardRef.value = getBoard();
    stepsRef.value = [];
    regretsRef.value = [];
    isEndRef.value = false;
    isOpenAIRef.value = false;
    isAIFirstRef.value = false;
  }

  // 点击设置事件
  function handleConfig() {
    handleClear();
    const aiConfirmDia = DialogPlugin.confirm({
      header: '游戏设置',
      body: '是否人机对战',
      confirmBtn: '确定',
      cancelBtn: '取消',
      onConfirm: ({ e }) => {
        aiConfirmDia.hide?.();
        const firstConfirmDia = DialogPlugin.confirm({
          header: '游戏设置',
          body: '是否电脑先手',
          confirmBtn: '确定',
          cancelBtn: '取消',
          onConfirm: ({ e }) => {
            isOpenAIRef.value = true;
            isAIFirstRef.value = true;
            // 如果是人机对战并且电脑先手，需要让电脑先走一步
            handleClickPiece(7, 7);
            firstConfirmDia.hide?.();
          },
          onClose: () => {
            isOpenAIRef.value = true;
            isAIFirstRef.value = false;
            firstConfirmDia.hide?.();
          },
        });
      },
      onClose: () => {
        aiConfirmDia.hide?.();
      },
    });
  }

  // 点击认输事件
  function handleAdmitDefeat() {
    isEndRef.value = true;
    MessagePlugin.success({
      content: () => handleVictoryMsg(winnerRef.value),
      duration: 1000,
    });
  }

  // 点击悔棋事件
  function handleGoBack() {
    if (stepsRef.value.length) {
      const step = stepsRef.value.pop();
      boardRef.value[step!.position[0]][step!.position[1]] = 0;
      regretsRef.value.push(step as StepsItem);
    }
  }

  // 点击撤销悔棋事件
  function handleReGoBack() {
    if (regretsRef.value.length) {
      const step = regretsRef.value.pop();
      boardRef.value[step!.position[0]][step!.position[1]] = step!.theme;
      stepsRef.value.push(step as StepsItem);
    }
  }

  //**--------------------------------- 主程序区域 ------------------------------------**/
  // 判胜程序，每走一步，都找一下是否有5子相连
  watchEffect(() => {
    // 已分出结果 或 总步数小于9 不进行查找5连子
    if (isEndRef.value || stepsRef.value.length < 9) return false;
    const lastStep = stepsRef.value[stepsRef.value.length - 1];
    const { result, direction } = hasNum(
      lastStep.position,
      lastStep.theme,
      5,
      boardRef.value
    );

    if (result) {
      // 如果找到5连子，自动认输
      handleAdmitDefeat();
    }
  });

  // 人机程序
  watchEffect(() => {
    // 判断如果玩家先手则跳过
    if(!stepsRef.value.length && !isAIFirstRef.value) return
    // 人机情况且电脑执棋才会执行
    if (isOpenAIRef.value && aiThemeRef.value === nowThemeRef.value) {
      nextTick(() => {
        const [row, col] = aiDecision(stepsRef.value, boardRef.value);
        handleClickPiece(row, col);
      });
    }
  });

  return {
    isEndRef,
    boardRef,
    stepsRef,
    regretsRef,
    nowThemeRef,
    winnerRef,
    handleClickPiece,
    handleConfig,
    handleAdmitDefeat,
    handleClear,
    handleGoBack,
    handleReGoBack,
  };
}
