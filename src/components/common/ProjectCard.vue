<template>
  <figure
    class="relative w-full pb-3/4 overflow-hidden bg-gray-900 bg-center bg-no-repeat border-white hover:border-0 hover:shadow-lg transition duration-1000 ease-in-out hover:z-10"
    :class="project.bgSize"
    :style="{'background-image': `url(${project.image})`}">
    <figcaption class="absolute w-full h-full flex flex-col items-center justify-center p-4 bg-gray-900 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
      <h3 class="mb-4 text-3xl text-white">{{project.title}}</h3>
      <p class="max-4-line text-center text-xl text-white font-normal">{{project.description}}</p>
      <a
        class="mt-3 p-4 rounded-lg bg-red-600 border-2 border-red-900 text-md text-white transition ease-in-out duration-300"
        target="_blank"
        :title="project.title"
        :href="project.url">
        View Website
      </a>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface Project {
  name: string;
  image: string;
  url: string;
  description: string;
  bgSize: string;
}

@Options({
  props: {
    project: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {
  },
})

export default class ProjectCard extends Vue {
  private project!: Project;
}
</script>

<style scoped lang="scss">
</style>
