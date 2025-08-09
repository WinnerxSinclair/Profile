<template>
  <img :class="[mode, widthClass]" class="thumbnail" :src="image" alt="">
</template>
<script setup>

const props = defineProps({
  image: String,
  mode: { type: String, default: '' },
  widthClass: { type: String, default: 'project'}
})
</script>

<style scoped>
.thumbnail{
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);
  flex-shrink: 0;
  border-radius: 1rem;
}

.project{
  max-width: min(100%, 950px);
}

.home{
  width: clamp(350px, 100%, 700px);
}
.horizontal{
  aspect-ratio: 16/9;
}
.vertical{
  aspect-ratio: 9/16;
}
</style>