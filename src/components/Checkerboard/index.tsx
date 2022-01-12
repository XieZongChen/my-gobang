import { defineComponent, renderSlot } from 'vue';

import styles from './styles.module.less';

export default defineComponent({
  name: 'Checkerboard',
  render() {
    return (
      <div class={styles.checkerboard}>
        {renderSlot(this.$slots, 'default')}
      </div>
    );
  },
});
