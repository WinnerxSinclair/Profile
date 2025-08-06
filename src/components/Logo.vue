<template>
  <img class="tech-logo" v-if="svg" :src="svg" alt="">
</template>

<script setup>
import { onMounted, ref } from 'vue'
const svgs = import.meta.glob('../assets/techLogos/*.svg')

const props = defineProps({
  svgName: String
});

const svg = ref(null);
onMounted(async () => {
  const file = svgs[`../assets/techLogos/${props.svgName}.svg`];
  if(!file){
    console.warn('no svg found');
    return;
  }
  const mod = await file();
  svg.value = mod.default;
});
</script>

<style scoped>
.tech-logo{
  width: 40px;
}
</style>