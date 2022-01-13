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
      <t-layout>
        <t-header class={styles.header}>
          <div>五子棋游戏</div>
          <t-tooltip placement='bottom' show-arrow={false}>
            {{
              default: () => <t-icon name='help-circle' size='18px' />,
              content: () => (
                <per>
                  1. 点击棋盘直接开始人-人对战
                  <br /> 2. 点击设置可以进行人-机对战
                  <br /> 3. 对战时，[认输] 可直接进入对战结束状态
                  <br /> 4. 对战时，[上一步] 为悔棋
                  <br /> 5. 对战时，[下一步]
                  为撤销悔棋，当在悔棋后又走一步，则撤销悔棋失效
                  <br /> 6. 对战结束后，[上一步]、[下一步] 可以回看本局对战情况
                  <br /> 7. 对战结束后，点击 [清盘] 可清除对局
                </per>
              ),
            }}
          </t-tooltip>
        </t-header>
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
