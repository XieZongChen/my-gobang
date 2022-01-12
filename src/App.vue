<template>
  <GameProgram/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameProgram from './views/GameProgram';

export default defineComponent({
  name: 'App',
  components: {
    GameProgram
  }
});
</script>

<style lang="less">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 320px;
  --header-height: 64px;
  --header-box-shadow: inset 0 -1px 0 #e7e7e7;
  --content-width: 900px;
  --content-max-width: calc(100vw - 32px);
  --piece-small-size: 30px;
  --piece-medium-size: 38px;
}

body {
  overflow: auto;
  -webkit-font-smoothing: antialiased;
}
</style>
