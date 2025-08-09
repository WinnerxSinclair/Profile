<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

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
