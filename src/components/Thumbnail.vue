<template>
  <img :class="mode" class="thumbnail" :src="image" alt="">
</template>
<script setup>

const props = defineProps({
  image: File,
  mode: String
})
</script>

<style scoped>
.thumbnail{
  max-width: 60%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);
  flex-shrink: 0;
  border-radius: 1rem;
  aspect-ratio: 9/16;
}

.horizontal{
  aspect-ratio: 16/9;
}
.vertical{
  aspect-ratio: 9/16;
}
</style>