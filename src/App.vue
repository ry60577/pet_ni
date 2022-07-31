<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useAnimal } from "./conposable/useAnimal";

const { getAnimalList } = useAnimal();
const store = useStore();
onBeforeMount(async () => {
  await store.commit("common/checkIsMobile");
  await getAnimalList();
});
const animalList = computed(() => {
  return store.getters["animal/getAnimalList"];
});
</script>
