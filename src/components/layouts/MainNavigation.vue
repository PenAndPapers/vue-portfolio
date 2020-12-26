<template>
  <nav id="nav" class="fixed top-0 bottom-0 right-0 w-full grid grid-flow-row auto-rows-fr z-50 hidden">
    <router-link
      to="/"
      class="menu-item animate__animated flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Home</span>
    </router-link>
    <router-link
      to="/projects"
      class="menu-item animate__animated flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Projects</span>
    </router-link>
    <router-link
      to="/"
      class="menu-item animate__animated flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">Development Tools</span>
    </router-link>
    <router-link
      to="/"
      class="menu-item animate__animated flex items-center justify-center -mt-px bg-gray-900 hover:bg-red-600">
      <span class="absolute right-20 lowercase text-right text-6xl text-white font-plaster transition-all">About</span>
    </router-link>
  </nav>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  mounted() {
    // const menuItems = document.querySelectorAll('.menu-item');
    // menuItems.forEach((element) => {
    //   element.classList.add('animate__bounceInRight');
    // });
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
