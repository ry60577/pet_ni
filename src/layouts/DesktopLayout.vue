<!-- PetniLayout -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      bordered
      class="bg-white text-primary"
      :class="{ 'pw-lg': !isMobile }"
    >
      <q-toolbar :class="{ no_padding: isMobile }" v-show="!isMobile">
        <q-btn flat size="2rem">
          <img src="../assets/icon/petni_logo.svg" alt="Petni 陪你" />
        </q-btn>
        <q-space />

        <Navigation />
      </q-toolbar>
      <LocationTab v-show="isMobile && route.name === 'emergency'" />
    </q-header>

    <q-footer bordered class="bg-white text-primary" v-show="isMobile">
      <Navigation />
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
