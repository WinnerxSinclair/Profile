<template>
 
    <div class="flex col ac gap outermost-wrap" v-if="projectData">
      <RouterLink to="/" class="home-link">
        <img src="../assets/logos/home.svg" alt="">
        <span class="fs-500">Home</span>
      </RouterLink>
      <div class="flex gap ac">
        <img class="logo" :src="projectData.logo" alt="">
        <h1 class="big-title">{{ projectData.title }}</h1>
      </div>
      <div class="subtitle fs-400">{{ projectData.subtitle }}</div>
      <div class="flex jc ac gap">
        <a class="links" :href="projectData.repo" target="_blank">
          <span>Visit Repo</span>
          <img class="icon" src="../assets/techLogos/GitHub_White.svg" alt="">
        </a>
        <a v-if="projectData.demo" class="links site-link" :href="projectData.demo" target="_blank">
          <span>Visit Site</span>
          <img class="icon" src="../assets/logos/link.svg" alt="">
        </a>
      </div>
      
      <Thumbnail :image="projectData.home" width-class="hero" />
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
          <div v-for="tech in projectData.tech" :key="tech.heading">
            <h3>{{ tech.heading }}</h3>
            <div class="flex gap ac">        
              <a 
                v-for="techIcon in tech.icons" :key="techIcon" 
                :href="logoMap[techIcon]?.link"
                target="_blank"      
              >
                <img class="tech-logo" :src="logoMap[techIcon]?.logo" :alt="`${techIcon} Logo`">
              </a>
            </div>
            <p v-html="tech.summary"></p>
          </div>
        </section>
      </div>
      <section class="features">
        <h2>Features</h2>
        <div class="flex col slide-wrapper">
          <AlternatingWrapper v-for="(slide, i) in projectData.slides" :key="slide.name" :index="i">
            <Thumbnail :image="slide.media.image" :mode="slide.media.mode" />
            <div class="pad slide-info">
              <h3>{{ slide.name }}</h3>
              <p>{{ slide.overview }}</p>
              <ul>
                <li v-for="(feature, i) in slide.features" :key="i">{{ feature }}</li>
              </ul>
            </div>
          </AlternatingWrapper>
        </div>
      </section>
      <div class="challenges" v-if="projectData.challenges">
        <section>
          <h2>Challenges</h2>
          <div class="challenge-wrapper" v-for="(challenge, i) in projectData.challenges" :key="i">
            <h3>Challenge #{{ i+1 }}: {{ challenge.heading }}</h3>
            <p>{{ challenge.problem }}</p>
            <h4 class="mt-3">Solution</h4>
  
            <div class="solution-wrapper" v-for="(solution, i) in challenge.solution" :key="i">
              <p>{{ solution.summary }}</p>
              <div v-if="solution.code">
                <div v-if="solution.code.caption" v-html="solution.code.caption"></div>
                <div v-if="solution.code.codeHtml" v-html="solution.code.codeHtml"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="video" v-if="projectData.video_demo">
        <h2 class="tac">Video Demo</h2>
        <video class="mt-3 video-fluid" controls muted preload="metadata" >
          <source :src="projectData.video_demo" type="video/mp4" />
        </video>
      </section>  
    </div>
 
  <div v-if="!projectData" class="tac fs-500">Loading Project...</div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { loadProject } from '@/helpers/projectLoader.js';
import { logoMap } from '@/helpers/logoMap.js'
import { useRoute } from 'vue-router';
const route = useRoute();

import Thumbnail from '@/components/Thumbnail.vue';
import AlternatingWrapper from '@/components/AlternatingWrapper.vue';
const props = defineProps({
  projectSlugName: String
});

const projectData = ref(null);


watch(() => route.params.projectSlugName, async (newSlug) => {
  projectData.value = null;
  projectData.value = await loadProject(newSlug);

  await nextTick();
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}, { immediate: true });


</script>

<style scoped>
.logo{
  width: 100px;
}
.outermost-wrap{
  margin-top: 1rem;
  padding: 1rem;
  --section-space: 5rem;
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
.video-fluid{
  width: 100%;
  height: auto;
  display: block;
  max-height: 80vh;
}
.features,
.challenges,
.video{
  margin-top: var(--section-space);
}
.features > h2{
  text-align: center;
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
.challenges{
  width: clamp(350px, 100%, 75ch);
}
h4{
  font-size: 1.3rem;
  font-weight: bold;
}
.slide-info{
  flex-basis: 400px;
}
.slide-info li{
  font-size: 1.4rem;
}
.slide-wrapper{
  gap: 5rem;
}
.challenge-wrapper + .challenge-wrapper{
  margin-top: 3rem;
}
.solution-wrapper + .solution-wrapper{
  margin-top: 1rem;
}
.home-link{
  color: black;
  text-decoration: none;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: .3rem;
  border-radius: 9em;
  background: white;
  border: 1px solid rgba(19, 19, 19, 0.459);
  padding: .2em .4em;
}
.home-link:hover{
  background: rgb(224, 224, 224);
}
.icon{
  width: 30px;
  margin-left: 1rem;
}
.links{
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(247, 247, 247);
  border-radius: 9em;
  background: rgba(27, 27, 27, 0.89);
  padding: .2em .5em;
  cursor: pointer;
}
.links:hover{
  background: rgba(32, 32, 32, 0.685);
}
.site-link{
  background: rgb(228, 204, 140);
  color:black;
}
.site-link:hover{
  background: rgba(228, 205, 140, 0.685);
}


</style>