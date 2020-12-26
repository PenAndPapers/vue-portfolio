<template>
  <div
    id="custom-cursor"
    class="fixed top-0 left-0 flex items-center justify-center p-2 border border-gray-500"
    :style="{'margin-top': `${mouseY}px`, 'margin-left': `${mouseX}px`}">
    <div class="inner absolute bg-gray-500" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  },
})

export default class CustomCursor extends Vue {}
</script>

<style scoped lang="scss">
#custom-cursor {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  z-index: 90;
  .inner {
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
}
</style>
