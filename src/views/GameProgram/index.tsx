import { defineComponent, toRaw } from 'vue';
import Piece from '../../components/Piece';
import Gobang from '../Gobang';
import Panel from '../Panel';
import { useGobangProgram } from '../../hooks/useGobangProgram';
import styles from './styles.module.less';
import { PieceTheme } from '../../hooks/useGobangProgram/interface';

export default defineComponent({
  name: 'GameInterface',
  setup() {
    function handleVictoryMsg(theme: PieceTheme) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Piece
            theme={PieceTheme[theme] as 'white'}
            size='small'
            style={{ position: 'unset' }}
          />
          <div style={{ marginLeft: '10px' }}>
            胜利！点击 [上一步]、[下一步] 按钮复盘当前局。点击 [清盘] 重置游戏。
          </div>
        </div>
      );
    }

    const {
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
    } = useGobangProgram({
      handleVictoryMsg,
    });

    return {
      isEnd: isEndRef,
      board: boardRef,
      steps: stepsRef,
      regrets: regretsRef,
      nowTheme: nowThemeRef,
      winner: winnerRef,
      handleClickPiece,
      handleConfig,
      handleAdmitDefeat,
      handleClear,
      handleGoBack,
      handleReGoBack,
    };
  },
  render() {
    const { steps, isEnd } = this;
    return (
      <t-layout class={styles.layout}>
        <t-header class={styles.header}>五子棋游戏</t-header>
        <t-content class={styles.content}>
          <Gobang
            board={this.board}
            onPieceClick={this.handleClickPiece}
            disabled={isEnd}
          />
        </t-content>
        <t-footer class={styles.footer}>
          <Panel
            stepsNum={steps.length}
            isEnd={isEnd}
            startDisabled={isEnd || !!steps.length}
            endDisabled={!steps.length}
            goBackDisabled={!steps.length}
            reGoBackDisabled={!this.regrets.length}
            nowTheme={this.nowTheme}
            onGoBack={this.handleGoBack}
            onReGoBack={this.handleReGoBack}
            onAdmitDefeat={this.handleAdmitDefeat}
            onClear={this.handleClear}
            onConfig={this.handleConfig}
          />
        </t-footer>
      </t-layout>
    );
  },
});
