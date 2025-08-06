<template>
  <div class="flex col ac gap outermost-wrap" v-if="projectData">
    <div class="flex gap ac">
      <img class="logo" :src="projectData.logo" alt="">
      <h1 class="big-title">{{ projectData.title }}</h1>
    </div>
    <div class="subtitle">{{ projectData.subtitle }}</div>
    
    <img :src="projectData.home" alt="">
    <div class="info">
      <section>
        <h2>Overview</h2>
        <div v-for="(section, i) in projectData.overview" :key="i">
          <h3>{{ section.heading }}</h3>
          <p v-html="section.text"></p>
        </div>
      </section>
      <section>
        <h2>Architecture</h2>
        <div>
          <h3>Frontend</h3>
          <div class="flex gap ac">
            <!-- <Logo v-for="tech in projectData.tech.frontend.icons" :key="tech" :svgName="tech" /> -->
            <a 
              v-for="tech in projectData.tech.frontend.icons" :key="tech" 
              :href="logoMap[tech].link"
              target="_blank"
              class="flex ac"
            >
              <img class="tech-logo" :src="logoMap[tech].logo" alt="">
            </a>
          </div>
          <p v-html="projectData.tech.frontend.summary"></p>
        </div>
        <div>
          <h3>Backend</h3>
          <div class="flex gap">
            <Logo v-for="tech in projectData.tech.backend.icons" :key="tech" :svgName="tech" />
            
          </div>
          <p v-html="projectData.tech.backend.summary"></p>
        </div>
      </section>
    </div>
    <section class="features">
      <h2>Features</h2>
      <AlternatingWrapper v-for="(slide, i) in projectData.slides" :key="slide.name" :index="i">
        <Thumbnail :image="slide.media.image" :mode="slide.media.mode" />
        <div class="pad">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.overview }}</p>
          <ul>
            <li v-for="(feature, i) in slide.features" :key="i">{{ feature }}</li>
          </ul>
        </div>
      </AlternatingWrapper>
    </section>
  </div>

  <div>{{ projectData }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadProject } from '@/helpers/projectLoader.js';
import { logoMap } from '@/helpers/logoMap.js'

import Logo from '@/components/Logo.vue';
import Thumbnail from '@/components/Thumbnail.vue';
import AlternatingWrapper from '@/components/AlternatingWrapper.vue';
const props = defineProps({
  projectSlugName: String
});

const projectData = ref(null);

onMounted(async () => {
  projectData.value = await loadProject(`${props.projectSlugName}`)
})

</script>

<style scoped>
.logo{
  width: 100px;
}
.outermost-wrap{
  margin-top: 2rem;
}
.big-title{
  font-size: 3rem;
}
.info{
  max-width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
p{
  font-size: 18px;
}
h3{
  margin-top: 1rem;
}
.features{
  
}
ul{
  font-size: 1.2rem;
}
li{
 margin-left: 1.5rem;
}
.tech-logo{
  width: 40px;
}
</style>