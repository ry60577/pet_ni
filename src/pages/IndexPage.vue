<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useAnimal } from "../conposable/useAnimal.js";

const { getAnimalList } = useAnimal();
const store = useStore();
onBeforeMount(async () => {
  await getAnimalList();
});
const animalList = computed(() => {
  return store.getters["animal/getAnimalList"];
});
</script>
