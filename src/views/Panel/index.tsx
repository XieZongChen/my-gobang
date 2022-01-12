import { h, defineComponent, computed, PropType } from 'vue';
import Piece from '../../components/Piece';
import { PieceTheme } from '../../hooks/useGobangProgram/interface';

import styles from './styles.module.less';

export default defineComponent({
  name: 'Panel',
  props: {
    stepsNum: Number,
    isEnd: Boolean,
    startDisabled: Boolean,
    endDisabled: Boolean,
    goBackDisabled: Boolean,
    reGoBackDisabled: Boolean,
    nowTheme: {
      type: Number as PropType<PieceTheme>,
      default: 1,
    },
    onGoBack: Function as PropType<() => void>,
    onReGoBack: Function as PropType<() => void>,
    onAdmitDefeat: Function as PropType<() => void>,
    onClear: Function as PropType<() => void>,
    onConfig: Function as PropType<() => void>,
  },
  render() {
    return (
      <div class={styles.card}>
        <div class={styles.shows}>
          <div class={styles.nowTheme}>
            执棋方：
            <Piece
              theme={PieceTheme[this.nowTheme] as 'white'}
              size='small'
              style={{ left: '64px', top: '-7px' }}
            />
          </div>
          <div>总步数：{this.stepsNum}</div>
        </div>
        <div class={styles.operation}>
          <t-button
            theme='default'
            variant='base'
            disabled={this.startDisabled}
            onClick={() => this.onConfig?.()}
          >
            设置
          </t-button>
          {this.isEnd ? (
            <t-button
              theme='danger'
              variant='base'
              disabled={this.endDisabled}
              onClick={() => this.onClear?.()}
            >
              清盘
            </t-button>
          ) : (
            <t-button
              theme='danger'
              variant='base'
              disabled={this.endDisabled}
              onClick={() => this.onAdmitDefeat?.()}
            >
              认输
            </t-button>
          )}
          <t-button
            theme='default'
            variant='dashed'
            disabled={this.goBackDisabled}
            onClick={() => this.onGoBack?.()}
          >
            上一步
          </t-button>
          <t-button
            theme='default'
            variant='dashed'
            disabled={this.reGoBackDisabled}
            onClick={() => this.onReGoBack?.()}
          >
            下一步
          </t-button>
        </div>
      </div>
    );
  },
});
