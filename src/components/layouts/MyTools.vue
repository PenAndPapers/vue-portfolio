<template>
  <section
    id="tools"
    class="w-full lg:w-10/12 m-auto mt-24 bg-white z-10">
    <div
      id="tools-i-use"
      class="mb-32 transform -rotate-6 animate__animated opacity-0">
      <h2 class="mb-14 pb-3 text-center text-5xl text-gray-900 font-black font-plaster border-b-2 border-gray-200">Development tools I use</h2>
      <div class="mx-24 text-center">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="index"
          :classes="skill.class"
          :title="skill.name"
        />
      </div>
    </div>
    <div id="frameworks-and-cms" class="mb-32 transform -rotate-6 animate__animated opacity-0">
      <h2 class="mb-14 pb-3 text-center text-5xl text-gray-900 font-black font-plaster border-b-2 border-gray-200">Frameworks and CMS</h2>
      <div class="mx-24 text-center">
        <SkillCard
          v-for="(skill, index) in skillsFrameworks"
          :key="index"
          :classes="skill.class"
          :title="skill.name"
        />
      </div>
    </div>
    <div id="tools-im-learning" class="mb-32 transform -rotate-6 animate__animated opacity-0">
      <h2 class="mb-14 pb-3 text-center text-5xl text-gray-900 font-black font-plaster border-b-2 border-gray-200">Tools I'm currently learning</h2>
      <div class="mx-24 text-center">
        <SkillCard
          v-for="(skill, index) in skillsLearning"
          :key="index"
          :classes="skill.class"
          :title="skill.name"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SkillCard from '@common/SkillCard.vue';

@Options({
  data() {
    return {
      skills: [
        {
          name: 'HTML/HTML5',
          class: 'icon-html text-red-500',
        },
        {
          name: 'CSS/CSS3',
          class: 'icon-css text-blue-500',
        },
        {
          name: 'Sass',
          class: 'icon-sass text-pink-500',
        },
        {
          name: 'Less',
          class: 'icon-less text-blue-900',
        },
        {
          name: 'Tailwind',
          class: 'icon-tailwind text-green-400',
        },
        {
          name: 'Bulma',
          class: 'icon-bulma text-green-400',
        },
        {
          name: 'Boostrap',
          class: 'icon-bootstrap text-purple-700',
        },
        {
          name: 'Javascript',
          class: 'icon-js text-yellow-600',
        },
        {
          name: 'Typescript',
          class: 'icon-typescript text-blue-500',
        },
        {
          name: 'Storybook',
          class: 'icon-storybook text-pink-500',
        },
        {
          name: 'NPM',
          class: 'icon-npm text-red-600',
        },
        {
          name: 'Yarn',
          class: 'icon-yarn text-blue-600',
        },
        {
          name: 'Webpack',
          class: 'icon-webpack text-blue-600',
        },
        {
          name: 'MySQL',
          class: 'icon-mysql text-yellow-600',
        },
        {
          name: 'PHP',
          class: 'icon-php text-indigo-500',
        },
        {
          name: 'Docker',
          class: 'icon-docker text-blue-500',
        },
        {
          name: 'Ubuntu',
          class: 'icon-ubuntu text-red-600',
        },
      ],
      skillsFrameworks: [
        {
          name: 'Vue JS',
          class: 'icon-vue text-green-600',
        },
        {
          name: 'Nuxt',
          class: 'icon-nuxt text-blue-500',
        },
        {
          name: 'Lavel',
          class: 'icon-laravel text-red-600',
        },
        {
          name: 'Directus Headless CMS',
          class: 'icon-directus text-gray-600',
        },
        {
          name: 'Wordpress CMS',
          class: 'icon-wordpress text-blue-400',
        },
      ],
      skillsLearning: [
        {
          name: 'React JS',
          class: 'icon-react text-blue-500',
        },
        {
          name: 'Svelete JS',
          class: 'icon-svelte text-pink-500',
        },
        {
          name: 'GraphQL',
          class: 'icon-graphql text-pink-500',
        },
        {
          name: 'Node JS',
          class: 'icon-nodejs text-green-500',
        },
      ],
    };
  },
  components: {
    SkillCard,
  },
  methods: {
    isInView() {
      const screenHeight = window.innerHeight;
      const toolsIUse = document.getElementById('tools-i-use');
      const frameWorksAndCms = document.getElementById('frameworks-and-cms');
      const toolsImLearning = document.getElementById('tools-im-learning');
      const offSet = 350;

      window.addEventListener('scroll', () => {
        const toolsIUseScrollY = toolsIUse?.getBoundingClientRect()?.top || 0;
        const frameWorksAndCmsScrollY = frameWorksAndCms?.getBoundingClientRect()?.top || 0;
        const toolsImLearningScrollY = toolsImLearning?.getBoundingClientRect()?.top || 0;

        if (toolsIUse) {
          if ((screenHeight - offSet) >= toolsIUseScrollY) {
            toolsIUse.classList.add('animate__fadeIn');
          }
        }

        if (frameWorksAndCms) {
          if ((screenHeight - offSet) >= frameWorksAndCmsScrollY) {
            frameWorksAndCms.classList.add('animate__fadeIn');
          }
        }

        if (toolsImLearning) {
          if ((screenHeight - offSet) >= toolsImLearningScrollY) {
            toolsImLearning.classList.add('animate__fadeIn');
          }
        }
      });
    },
  },
  mounted() {
    this.isInView();
  },
})

export default class MyTools extends Vue {}
</script>

<style scoped lang="scss">
</style>
