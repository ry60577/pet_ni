<template>
  <div class="theme_card_wrapper theme_bg">
    <h1>{{ theme.chineses_name }}</h1>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped>
.theme_card_wrapper {
  height: 100vh;
}
.theme_bg {
  background-image: url("../assets/image/cat_chineses.svg");
  background-repeat: no-repeat;
  background-position: 60% 20%;
}
</style>
