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
  gap: 2rem;
  margin-top: 5rem;
}
.row-reverse{
  flex-direction: row-reverse;
}
</style>