<template>
  <div class="h-24 mt-16">
    <div class="relative flex items-center justify-center">
      <div class="arrow h-6 w-6 absolute bottom-4px transform rotate-45 border-white border-b border-r"></div>
      <div class="line h-24 w-px bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})

export default class ArrowBottom extends Vue {}
</script>

<style scoped lang="scss">
</style>
