<template>
  <div class="wrapper" :class="{'row-reverse': index % 2 !== 0}">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  index: Number
});
</script>


<style scoped>
.wrapper{
  display: flex;
  justify-content: center;
  gap: 2rem;
  
  flex-wrap: wrap-reverse;
}
.row-reverse{
  flex-direction: row-reverse;
}
</style>