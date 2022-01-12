import { h, defineComponent, inject, computed, PropType } from 'vue';
import Checkerboard from '../../components/Checkerboard';
import Piece from '../../components/Piece';
import { PieceTheme } from '../../hooks/useGobangProgram/interface';

import styles from './styles.module.less';

export default defineComponent({
  name: 'Gobang',
  props: {
    board: Array as PropType<PieceTheme[][]>,
    onPieceClick: Function as PropType<(row: number, col: number) => void>,
    disabled: Boolean,
  },
  render() {
    return (
      <div class={styles.checkerboardBox}>
        <Checkerboard>
          {this.board?.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
              return (
                <Piece
                  key={`${rowIndex}-${colIndex}`}
                  theme={PieceTheme[col] as 'white'}
                  onClick={() => this.onPieceClick?.(rowIndex, colIndex)}
                  style={{
                    marginTop: `${rowIndex * 50}px`,
                    marginLeft: `${colIndex * 47}px`,
                  }}
                />
              );
            });
          })}
        </Checkerboard>
        <div class={this.disabled ? styles.disabled : null}></div>
      </div>
    );
  },
});
