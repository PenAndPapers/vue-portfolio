<template>
  <nav
    id="nav"
    class="fixed top-0 bottom-0 right-0 w-full grid grid-flow-row auto-rows-fr z-40 animate__animated animate__fast"
    :class="[navState ? 'animate__slideInRight' : 'animate__slideOutRight']">
    <router-link
      to="/"
      class="menu-item flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Home</span>
    </router-link>
    <router-link
      to="/projects"
      class="menu-item flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Projects</span>
    </router-link>
    <a
      class="menu-item flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600 cursor-pointer">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Development Tools</span>
    </a>
    <a
      class="menu-item flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600 cursor-pointer">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">About</span>
    </a>
  </nav>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import MainNavigationModule from '@/store/MainNavigationModule';

const NavigationModule = getModule(MainNavigationModule);

@Options({
  computed: {
    navState() {
      return NavigationModule.getNavigationState;
    },
  },
})

export default class MainNavigation extends Vue {}
</script>
<style lang="scss">
#nav {
  a {
    &:hover {
      span {
        position: absolute;
        margin-right: 8rem;
      }
    }
  }
}
</style>
