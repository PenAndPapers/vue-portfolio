<template>
  <header id="hero-banner" class="w-full h-screen relative overflow-y-hidden bg-gray-900 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <Particles />
    <div class="slice absolute top-0 bottom-0 -left-40 h-px w-full block m-auto transform -rotate-45 bg-gray-600 shadow-2xl" />
    <div class="mt-48 mb-96 transform -skew-y-6">
      <h3 class="effect-3d -mb-8 text-center text-5xl text-red-600 font-black font-plaster">i'm</h3>
      <h1 class="effect-3d text-center text-12xl text-red-600 font-black font-plaster">{{name}}</h1>
      <h3 class="effect-3d text-center text-5xl text-red-600 font-black font-plaster">{{role}}</h3>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Particles from '@common/Particles.vue';

@Options({
  props: {
  },
  data() {
    return {
      name: 'steven',
      role: 'Senior Web Developer',
      mouseX: 0,
      mouseY: 0,
    };
  },
  components: {
    Particles,
  },
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  },
})

export default class HeroBanner extends Vue {}
</script>

<style scoped lang="scss">
header:after {
  content: '';
  position: absolute;
  bottom: -198px;
  height: 300px;
  width: 100%;
  background: #fff;
  -ms-transform: skewY(-6deg); /* IE 9 */
  transform: skewY(-6deg);
  z-index: 0;
}
#custom-cursor {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  z-index: 90;
  .inner {
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
}
</style>
