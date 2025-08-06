<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="header-title-wrap">
      <img src="https://images.unsplash.com/photo-1745990652119-f13cced69b7c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <div>
        <h1>Project Portfolio</h1>
        <div>by Jonathan Malise</div>
      </div>
    </div>
    <p>Hi, I'm Jonathan. I enjoy web development blah blah blah blah blah blah blah
      blah blah blah blah blah blah blahblah blah blah blah blah blah blah
    </p>
  </header>

  <RouterView />
</template>

<style scoped>
header{

  width: fit-content;
  max-width: 800px;
  margin: 0 auto;
  background: rgb(66, 64, 64);
  padding: 1rem;
  border-radius: 1rem;
  color:rgb(240, 240, 240);
}
header img{
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
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
</style>
