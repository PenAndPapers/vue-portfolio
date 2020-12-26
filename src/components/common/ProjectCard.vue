<template>
  <figure
    class="relative w-full pb-3/4 overflow-hidden bg-gray-900 bg-contain bg-center bg-no-repeat border-white hover:border-0 hover:shadow-lg cursor-pointer transition duration-1000 ease-in-out hover:z-40"
    :style="{'background-image': `url(${project.image})`}">
    <figcaption class="absolute w-full h-full flex flex-col items-center justify-center p-3 bg-gray-900 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
      <p class="max-4-line text-center text-md text-white font-normal">{{project.description}}</p>
      <a
        class="mt-3 p-2 rounded-lg bg-red-600 border-2 border-red-900 text-md text-white font-normal transition ease-in-out duration-300"
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
