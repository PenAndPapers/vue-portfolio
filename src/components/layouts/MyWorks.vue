<template>
  <section id="works" class="lg:w-11/12 mt-48 bg-white z-10">
    <h2 class="my-14 ml-24 pb-2 text-5xl text-right text-gray-900 font-black font-plaster border-b-2 border-gray-900">Projects that I've worked on</h2>
    <div class="grid grid-cols-4 gap-1">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProjectCard from '@common/ProjectCard.vue';

@Options({
  props: {
  },
  components: {
    ProjectCard,
  },
  methods: {
  },
})

export default class MyWorks extends Vue {
  private projects: object[] = [
    {
      image: require('@assets/img/nbl.svg'),
      url: 'https://nbl.com.au/',
      title: 'NBL',
      description: 'The National Basketball League is a men\'s professional basketball league in Oceania, currently composed of 9 teams: 8 in Australia and 1 in New Zealand. It is the premier professional men\'s basketball league in Australia and New Zealand.',
    },
    {
      image: require('@assets/img/nbltv.svg'),
      url: 'https://nbl.com.au/tv',
      title: 'NBLTV',
      description: 'NBL TV is an Australian subscription-based internet television channel, operated by the National Basketball League, which is available worldwide through the League\'s official website. The channel holds rights to not only the NBL, but a number of other basketball leagues and competitions worldwide too.',
    },
    {
      image: require('@assets/img/mutd-events.svg'),
      url: 'https://events.melbourneutd.com.au/',
      title: 'MUTD Events',
      description: '',
    },
    {
      image: require('@assets/img/adelaide-36ers.svg'),
      url: 'https://www.adelaide36ers.com/',
      title: 'Adelaide 36ers',
      description: 'The Adelaide 36ers, also known as the Sixers, are an Australian professional men\'s basketball team in the National Basketball League. The 36ers are the only team in the league representing the state of South Australia and are based in the state\'s capital of Adelaide',
    },
    {
      image: require('@assets/img/brisbane-bullets.svg'),
      url: 'https://www.brisbanebullets.com.au/',
      title: 'Brisbane Bullets',
      description: 'The Brisbane Bullets are an Australian professional men\'s basketball team in the National Basketball League based in Brisbane, Queensland. They competed from 1979 to 2008, and returned to the league in 2016.',
    },
    {
      image: require('@assets/img/cairns-taipans.svg'),
      url: 'https://www.taipans.com/',
      title: 'Cairns Taipans',
      description: 'The Cairns Taipans are an Australian professional basketball team based in Cairns, Queensland. The Taipans compete in the National Basketball League and play their home games at the Cairns Convention Centre, known colloquially as "The Snakepit". The Taipans are the only not-for-profit club left in the league.',
    },
    {
      image: require('@assets/img/illawarra-hawks.svg'),
      url: 'https://www.hawks.com.au/',
      title: 'Illawarra Hawks',
      description: 'The Hawks is an Australian professional basketball team based in Wollongong, New South Wales. The Hawks compete in the National Basketball League (NBL) and play their home games at WIN Entertainment Centre, known colloquially as "The Sandpit".',
    },
    {
      image: require('@assets/img/melbourne-united.svg'),
      url: 'https://www.melbourneutd.com.au/',
      title: 'Melbourne United',
      description: 'Melbourne United is an Australian professional basketball team based in Melbourne, Victoria. United compete in the National Basketball League and play their home game at John Cain Arena. The team made their debut in the NBL in 1984 as the Melbourne Tigers, as an extension of the Melbourne Basketball Association.',
    },
    {
      image: require('@assets/img/nz-breakers.svg'),
      url: 'https://www.nzbreakers.basketball/',
      title: 'New Zealand Breakers',
      description: 'The New Zealand Breakers are a New Zealand professional basketball team based in Auckland. The Breakers compete in the National Basketball League and play their home games at Spark Arena',
    },
    {
      image: require('@assets/img/perth-wildcats.svg'),
      url: 'https://www.wildcats.com.au/',
      title: 'Perth Wildcats',
      description: 'The Perth Wildcats are an Australian professional basketball team based in Perth, Western Australia. The Wildcats compete in the National Basketball League and play their home games at RAC Arena, known colloquially as "The Jungle". Their sister team, the Perth Lynx, play in the Women\'s National Basketball League.',
    },
    {
      image: require('@assets/img/sem-phoenix.svg'),
      url: 'https://www.semphoenix.com.au/',
      title: 'South East Melbourne Phoenix',
      description: 'The South East Melbourne Phoenix are an Australian professional basketball team based in Melbourne, Victoria. The Phoenix entered the National Basketball League in the 2019–20 season.',
    },
    {
      image: require('@assets/img/sydney-kings.svg'),
      url: 'https://www.sydneykings.com/',
      title: 'Sydney Kings',
      description: 'The Sydney Kings are an Australian men\'s professional basketball team competing in the National Basketball League. The team is based in Sydney, New South Wales. The Kings were formed from a merger between the West Sydney Westars and the Sydney Supersonics in October 1987',
    },
    // },
    // {
    //   image: require('@assets/img/capitol-grand.webp'),
    //   url: 'https://www.capitolgrand.com/',
    //   title: 'Capitol Grand',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/amity.webp'),
    //   url: 'http://amity.com.au/',
    //   title: 'Amity Property',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/lkg.webp'),
    //   url: 'https://www.lkg.com.au/',
    //   title: 'LK Group',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/lk-property.webp'),
    //   url: 'http://www.lkproperty.com.au/',
    //   title: 'LK Property',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/signorino.webp'),
    //   url: 'https://www.signorino.com.au/',
    //   title: 'Signorino',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/qlc.webp'),
    //   url: 'http://www.qlcapital.com.au/',
    //   title: 'Queens Lane Capital',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/newsmodo.webp'),
    //   url: 'https://www.newsmodo.com/',
    //   title: 'Newsmodo',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/the-marc.webp'),
    //   url: 'https://themarc.com.au/',
    //   title: 'The Marc',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/koko-carnegie.webp'),
    //   url: 'https://www.kokoapartments.com.au/',
    //   title: 'Koko Carnegie',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/the-opus-tower.webp'),
    //   url: 'https://www.theopustower.com.au/',
    //   title: 'The Opus Tower',
    //    description: '',
    // },
    // {
    //   image: require('@assets/img/carrum-park.webp'),
    //   url: 'https://carrumpark.com.au/',
    //   title: 'Carrum Park',
    //    description: '',
    // },
  ]
}
</script>

<style scoped lang="scss">
</style>
