<template>
  <div class="home">
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
import CustomCursor from '@element/CustomCursor.vue';
import BurgerMenu from '@element/BurgerMenu.vue';
import MainNavigation from '@layout/MainNavigation.vue'; // @ is an alias to /src
import HeroBanner from '@layout/HeroBanner.vue';
import AboutMe from '@layout/AboutMe.vue';
import MyWorks from '@layout/MyWorks.vue';
import MyTools from '@layout/MyTools.vue';
import FooterNavigation from '@layout/FooterNavigation.vue';

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
})
export default class Home extends Vue {}
</script>
