<!-- PetniLayout -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="pw-lg bg-white text-primary">
      <Navigation />
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-toolbar class="glossy">
        <Navigation />
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Navigation from "components/Navigation.vue";
</script>
<style lang="scss" scoped></style>
