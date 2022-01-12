import { CSSProperties, defineComponent, PropType } from 'vue';

import styles from './styles.module.less';

export default defineComponent({
  name: 'Piece',
  props: {
    theme: {
      type: String as PropType<'white' | 'black' | 'transparent'>,
      default: 'white',
    },
    size: {
      type: String as PropType<'small' | 'medium'>,
      default: 'medium',
    },
    style: [String, Object] as PropType<string | CSSProperties>,
    onClick: Function as PropType<() => void>,
  },
  render() {
    return (
      <div
        class={[styles[this.theme], styles[this.size]]}
        style={this.style}
        onClick={this.onClick}
      ></div>
    );
  },
});
