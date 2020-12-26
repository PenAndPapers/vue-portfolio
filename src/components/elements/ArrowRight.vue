<template>
  <div class="w-24 mt-16">
    <div class="relative flex items-center justify-center">
      <div class="arrow h-6 w-6 absolute right-4px transform rotate-45 border-white border-t border-r"></div>
      <div class="line w-full h-px bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})

export default class ArrowRight extends Vue {}
</script>

<style scoped lang="scss">
</style>
