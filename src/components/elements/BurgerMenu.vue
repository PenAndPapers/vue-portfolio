<template>
  <a
    class="burger-menu fixed top-8 right-8 z-50 cursor-pointer"
    @click.stop.prevent="showNavigation">
    <span
      class="w-16 block mb-3 border-b transition-all duration-500"
      :class="borderColor"
    />
    <span
      class="w-16 block mb-3 border-b transition-all duration-500"
      :class="borderColor"
    />
    <span
      class="w-16 block border-b transition-all duration-500"
      :class="borderColor"
    />
  </a>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import MainNavigationModule from '@/store/MainNavigationModule';

const NavigationModule = getModule(MainNavigationModule);

@Options({
  data() {
    return {
      heroBanner: 0,
      footer: 0,
      borderColor: 'border-white',
      navState: false,
    };
  },
  methods: {
    showNavigation() {
      this.navState = !this.navState;
      NavigationModule.updateNavigationState(this.navState);
    },
    updateBurgerMenuColor() {
      if ((window.scrollY + 250) >= this.heroBanner.offsetHeight) {
        this.borderColor = 'border-black';
      } else if (window.scrollY <= this.heroBanner.offsetHeight) {
        this.borderColor = 'border-white';
      }

      if ((window.scrollY + 70) >= this.footer.offsetTop) {
        this.borderColor = 'border-white';
      }
    },
  },
  mounted() {
    this.heroBanner = document.getElementById('hero-banner');
    this.footer = document.getElementById('footer');
  },
  created() {
    window.addEventListener('scroll', this.updateBurgerMenuColor);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateBurgerMenuColor);
  },
})

export default class BurgerMenu extends Vue {}
</script>

<style scoped lang="scss">
a.burger-menu {
  &.active,
  &:hover {
    span {
      &:first-child {
        width: 3rem;
      }
      &:nth-child(2) {
        width: 2rem;
      }
    }
  }

}
</style>
