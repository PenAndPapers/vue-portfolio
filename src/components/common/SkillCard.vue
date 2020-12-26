<template>
  <span class="skill-card">
    <i
      class="text-8xl inline-block m-4"
      :class="`${classes} ${hoverClass}`"
      :title="title"
      @mouseover="addAnimation"
      @mouseout="removeAnimation"
    />
  </span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface Elem {
  target: {
    classList: {
      add: Function;
    };
  };
}

@Options({
  props: {
    title: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hoverClass: '',
    };
  },
  methods: {
    addAnimation() {
      this.hoverClass = 'animate__animated animate__shakeX';
    },
    removeAnimation() {
      this.hoverClass = '';
    },
  },
})

export default class SkillCard extends Vue {}
</script>

<style scoped lang="scss">
</style>
