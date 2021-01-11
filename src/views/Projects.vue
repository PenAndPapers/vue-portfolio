<template>
  <div
    class="home"
    :class="navState ? 'h-screen overflow-y-hidden' : ''">
    <!-- <CustomCursor /> -->
    <BurgerMenu />
    <MainNavigation />
    <MyWorks />
    <FooterNavigation />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import MainNavigationModule from '@/store/MainNavigationModule';

import BurgerMenu from '@element/BurgerMenu.vue';
import MainNavigation from '@layout/MainNavigation.vue'; // @ is an alias to /src
import MyWorks from '@layout/MyWorks.vue';
import FooterNavigation from '@layout/FooterNavigation.vue';

const NavigationModule = getModule(MainNavigationModule);

@Options({
  components: {
    BurgerMenu,
    MainNavigation,
    MyWorks,
    FooterNavigation,
  },
  computed: {
    navState() {
      return NavigationModule.getNavigationState;
    },
  },
})
export default class Home extends Vue {}
</script>
