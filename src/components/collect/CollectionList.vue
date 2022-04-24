<template>
  <div
    class="collection-list-wrapper"
    :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }"
  >
    <template v-for="item in collectList" :key="item.animal_id">
      <CollectCard :animal="item" />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CollectCard from "../collect/CollectCard.vue";

const store = useStore();
const collectList = computed(() =>
  store.getters["animal/getAnimalList"].slice(0, 10)
);
console.log(collectList);
</script>

<style scoped>
.collection-list-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
