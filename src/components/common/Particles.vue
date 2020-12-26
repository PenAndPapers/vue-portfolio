<template>
  <div class="particles-wrapper absolute top-0 bottom-0 z-0">
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  },
  methods: {
  },
})

export default class Particles extends Vue {}
</script>

<style scoped lang="scss">
/* Config */
$color-particle: #f22;
$spacing: 3000px;
$time-1: 80s;
$time-2: 90s;
$time-3: 100s;
$time-4: 120s;

/* mixins */
@function particles($max) {
  $val: 0px 0px $color-particle;
  @for $i from 1 through $max {
    $val: #{$val}, random($spacing)+px random($spacing)+px $color-particle;
  }
  @return $val;
}

@mixin particles($max) {
  box-shadow: particles($max);
  border-radius: 50%;
}

.particles-wrapper {
  width: 100%;
  height: 100%;
}

.particle, .particle:after {
  background: transparent;
}

.particle:after {
  position: absolute;
  content: "";
  top: $spacing;
}

.particle-1 {
  animation: animParticle $time-1 linear infinite;
  @include particles(700);
  height: 1px;
  width: 1px;
  border-radius: 50%;
}

.particle-1:after {
  animation: animParticle $time-4 linear infinite;
  @include particles(700);
  height: 1px;
  width: 1px;
}

.particle-2 {
  animation: animParticle $time-2 linear infinite;
  @include particles(700);
  height: 1px;
  width: 1px;
}

.particle-2:after {
  animation: animParticle $time-4 linear infinite;
  @include particles(700);
  height: 1px;
  width: 1px;
}

.particle-3 {
  animation: animParticle $time-4 linear infinite;
  @include particles(1000);
  height: 2px;
  width: 2px;
  border-radius: 50%;
}

.particle-3:after {
  animation: animParticle $time-4 linear infinite;
  @include particles(1000);
  height: 2px;
  width: 2px;
}

.particle-4 {
  animation: animParticle $time-4 linear infinite;
  @include particles(500);
  height: 3px;
  width: 3px;
  border-radius: 50%;
}

.particle-4:after {
  animation: animParticle $time-4 linear infinite;
  @include particles(500);
  height: 3px;
  width: 3px;
}

@keyframes animParticle {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY($spacing * -1);
  }
}
</style>
