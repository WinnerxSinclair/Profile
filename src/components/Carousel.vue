<template>
  <div>
    <div v-for="slide in slides" :key="slide.name">
      <img :src="slide.media" alt="">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slides: Array
});

</script>