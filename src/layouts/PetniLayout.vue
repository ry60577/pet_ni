<!-- PetniLayout -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="pw-lg bg-white text-primary" v-show="!isMobile">
      <Navigation />
    </q-header>

    <q-footer bordered class="bg-white text-primary" v-show="isMobile">
      <q-toolbar>
        <Navigation />
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStore } from "vuex";
import Navigation from "components/Navigation.vue";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
</script>
<style lang="scss" scoped></style>
