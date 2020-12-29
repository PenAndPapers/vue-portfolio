<template>
  <div
    class="home"
    :class="navState ? 'h-screen overflow-y-hidden' : ''">
    <!-- <CustomCursor /> -->
    <BurgerMenu />
    <MainNavigation />
    <HeroBanner />
    <MyTools />
    <!-- <MyWorks /> -->
    <AboutMe />
    <FooterNavigation />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import MainNavigationModule from '@/store/MainNavigationModule';

import CustomCursor from '@element/CustomCursor.vue';
import BurgerMenu from '@element/BurgerMenu.vue';
import MainNavigation from '@layout/MainNavigation.vue'; // @ is an alias to /src
import HeroBanner from '@layout/HeroBanner.vue';
import AboutMe from '@layout/AboutMe.vue';
import MyWorks from '@layout/MyWorks.vue';
import MyTools from '@layout/MyTools.vue';
import FooterNavigation from '@layout/FooterNavigation.vue';

const NavigationModule = getModule(MainNavigationModule);

@Options({
  components: {
    CustomCursor,
    BurgerMenu,
    MainNavigation,
    HeroBanner,
    AboutMe,
    MyWorks,
    MyTools,
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
