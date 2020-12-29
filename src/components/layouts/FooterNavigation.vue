<template>
  <footer id="footer" class="relative w-full h-screen flex items-center justify-center overflow-y-hidden">
    <div class="relative z-30 px-4">
      <nav class="flex justify-center items-center mt-12 mb-8 text-center">
        <a
          href="https://www.facebook.com/stvnski"
          target="_blank"
          class="inline-flex justify-center items-center w-20 h-20 mx-3 rounded-full border-2 border-red-600"
        >
          <i class="fab fa-facebook-f text-red-600 text-4xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/stevenpilagan/"
          target="_blank"
          class="inline-flex justify-center items-center w-20 h-20 mx-3 rounded-full border-2 border-red-600"
        >
          <i class="fab fa-linkedin-in text-red-600 text-4xl"></i>
        </a>
        <a
          href="https://github.com/PenAndPapers"
          target="_blank"
          class="inline-flex justify-center items-center w-20 h-20 mx-3 rounded-full border-2 border-red-600"
        >
          <i class="fab fa-github text-red-600 text-4xl"></i>
        </a>
        <a
          href="mailto:steven.pilagan@gmail.com"
          target="_blank"
          class="inline-flex justify-center items-center w-20 h-20 mx-3 rounded-full border-2 border-red-600"
        >
          <i class="fas fa-envelope text-red-600 text-4xl"></i>
        </a>
      </nav>
      <p class="text-center text-white text-sm font-montserrat-200">
        Made with Vue JS&nbsp;&nbsp;|&nbsp;&nbsp;TypeScript&nbsp;&nbsp;|&nbsp;&nbsp;Tailwind CSS
      </p>
    </div>
    <Particles class="overflow-y-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
  </footer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Particles from '@common/Particles.vue';

@Options({
  components: {
    Particles,
  },
})

export default class FooterNavigation extends Vue {}
</script>
<style lang="scss">
footer:before {
  content: '';
  position: absolute;
  top: -198px;
  height: 300px;
  width: 100%;
  background: #fff;
  -ms-transform: skewY(-6deg); /* IE 9 */
  transform: skewY(-6deg);
  z-index: 10;
}
</style>
