<template>
  <main>
    <header>
      <div class="header-title-wrap">
        <img src="../assets/WS.webp" alt="">
        <div>
          <h1>Project Portfolio</h1>
          <div>by Jonathan Malise</div>
        </div>
      </div>
      <p class="pad">Hi, I'm Jonathan. I aspire to be a web developer. I enjoy all things frontend and backend.
        I'm most famililiar with Vue, JavaScript, Node, Express, and MongoDB, but I can pick up new tech
        quickly while enjoying the learning process. Check out some of my projects below.
      </p>
    </header>

    <h2 class="tac fs-800">Projects</h2>

    <div class="slide-wrapper flex col">
      <AlternatingWrapper v-for="(project,i) in projectData" :key="project.title" :index="i"> 
        <Thumbnail :image="project.thumbnail" widthClass="home" />
        <div class="project-info">
          <div class="flex ac gap">
            <img class="logo" :src="project.logo" alt="">
            <h3 class="fs-700">{{ project.title }}</h3>
         
          </div>
          
          <p class="fs-500 mt-3">{{ project.description }}</p>
          <div class="flex gap mt-3">
            <RouterLink :to="`/project/${project.slug}`" class="details-btn">Details</RouterLink>
  
            <a v-if="project.demo_url" :href="project.demo_url" target="_blank" class="demo-btn">Demo</a>
          </div>
        </div>
      </AlternatingWrapper>      
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Thumbnail from '@/components/Thumbnail.vue'
import AlternatingWrapper from '@/components/AlternatingWrapper.vue'

import knouns_tn from '../assets/knouns/knouns_tn.png'
import knouns_logo from '../assets/knouns/knouns_logo.png'

import edhgo_tn from '../assets/edhgo-tn.png'
import edhgo_logo from '../assets/edhgo_logo.png'

import gg_tn from '../assets/gg_tn.png'
import gg_tn_2 from '../assets/gg_tn_2.png'
import gg_logo from '../assets/gg_logo.png'

import crypto_logo from '../assets/crypto_logo.png'
import crypto_tn from '../assets/crypto_tn.png'

import pomo_tn from '../assets/pomo_tn.png'
import pomo_logo from '../assets/pomo_logo.png'

const projectData = [
  {
    title: 'K-nouns',
    description: `Anki-like flashcard website for studying Korean. Standout feature is the ability to generate
    context driven translations and explanations with AI.`,
    thumbnail: knouns_tn,
    logo: knouns_logo,
    demo_url: 'https://knouns-prod.web.app',
    slug: 'K-nouns'
  },
  { 
    title: 'edh-go',
    description: `Android Magic: The Gathering Life Counter application focused on clean UI/UX. Edh-go
    allows counters, commander damage, rolling dice, and much more!`,
    thumbnail: edhgo_tn,
    logo: edhgo_logo,
    github_url: 'https://github.com/WinnerxSinclair/edh-go',
    demo_url: null,
    slug: 'edh-go'
  },
  { 
    title: 'Good Game',
    description: `Team project full stack website for a local game store. Main features include 
    a table reservation function for users, and an admin dashboard that allows managing various 
    systems, like tables, events, and the home page carousel.`,
    thumbnail: gg_tn_2,
    logo: gg_logo,
    github_url: 'https://github.com/StanPham/Good-Game-App/tree/main',
    demo_url: 'https://goodgame-testdev.web.app/',
    slug: 'good-game'
  },
  { 
    title: 'Pomo Timer',
    description: `Minimalist Pomodoro timer website. Users can add
    custom timers with varying repetitions. This app is useful
    for getting things done or creating/enforcing habits. No accounts, only localStorage.`,
    thumbnail: pomo_tn,
    logo: pomo_logo,
    github_url: 'https://github.com/WinnerxSinclair/Pomodoro',
    demo_url: 'https://winnerxsinclair.github.io/Pomodoro/',
    slug: 'pomo-timer'
  },
  // { 
  //   title: 'Crypto Charts',
  //   description: `Crypto website that shows the top 100 coins and their respetive charts.
  //   Utilizes CoinGecko API to fetch data and ApexCharts to display it.`,
  //   thumbnail: crypto_tn,
  //   logo: crypto_logo,
  //   github_url: 'https://github.com/WinnerxSinclair/Crypto',
  //   demo_url: 'https://crypto-36b3e.web.app/'
  // },
]
</script>



<style scoped>
header{
  width: fit-content;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
}
header img{
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}
header p{
  max-width: 66ch;
  font-size: 1.2rem;
  text-align: center;
}
.header-title-wrap{
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.project-info{
  padding: 1rem;
  padding-top:3rem;
  flex-shrink: 1;
  flex-grow: 0;
  flex-basis: 400px;
}

.logo{
  width: 45px;
}

.logo-sm{
  width: 30px;
}

a{
  text-decoration: none;
  color: black;
  padding: .5em 1em;
  border-radius: 9999px;
  color:white;
}

.details-btn{
  background: black;
  
}

.github-btn{
  background: rgb(145, 2, 145);
}

.demo-btn{
  background: rgb(138, 138, 238);
}
.slide-wrapper{
  gap: 5rem;
}
</style>
