<!-- PetniLayout -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      bordered
      class="bg-white text-primary"
      :class="{ 'pw-lg': !isMobile }"
    >
      <Navigation v-show="!isMobile" />

      <LocationTab v-show="isMobile && route.name === 'emergency'" />
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
import { useRoute } from "vue-router";
import Navigation from "components/Navigation.vue";
import LocationTab from "components/emergency/LocationTab.vue";

const route = useRoute();
const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
</script>
<style lang="scss" scoped></style>
