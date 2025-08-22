<script setup>
import { RouterLink, RouterView } from 'vue-router'

const projectData = [
  {
    title: 'K-nouns',
    slug: 'K-nouns'
  },
  { 
    title: 'edh-go',
    slug: 'edh-go'
  },
  { 
    title: 'Good Game',
    slug: 'good-game'
  },
  { 
    title: 'Pomo Timer',
    slug: 'pomo-timer'
  },
]
</script>

<template>

  <div class="flex col site-wrap">
      
    <div class="grow">
      <RouterView />
    </div>

  
    <footer class="flex jc">
      <nav class="flex footer-nav jc">
        <div>
          <h4>Site Nav</h4>
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
          </ul>
        </div>
  
        <div>
          <h4>Projects</h4>
          <ul>
            <li v-for="project in projectData" :key="project.title">
              <RouterLink :to="`/project/${project.slug}`">{{ project.title }}</RouterLink>
            </li>
          </ul>
        </div>
        
      </nav>
  
      <div>
        <h4>Contact</h4>
        <ul>
          <li>jmalise2000@gmail.com</li>
          <li>479-970-1547</li>
        </ul>
      </div>
    </footer>
  </div>

</template>

<style scoped>
ul{
  list-style: none;
}
footer{
  margin-top: 8rem;
  padding-bottom: 3rem;
  --footer-gap: 2rem;
  gap: var(--footer-gap);
}
.footer-nav{
  gap: var(--footer-gap);
}
.site-wrap{
  min-height: 100vh;
}
h4{
  font-size: 1.25rem;
  font-weight: 600;
}

</style>
