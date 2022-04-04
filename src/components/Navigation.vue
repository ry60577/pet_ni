<!--- Navigation --->
<template>
  <q-toolbar>
    <q-btn flat size="2rem">
      <img src="../assets/icon/petni_logo.svg" />
    </q-btn>
    <q-space />

    <q-tabs v-model="tab" shrink stretch inline-label>
      <q-tab name="match">
        <q-icon size="2em">
          <template v-if="tab === 'match'">
            <img src="../assets/icon/card_pink.svg" />
          </template>
          <template v-else>
            <img src="../assets/icon/card_gray.svg" />
          </template>
        </q-icon>
        <template v-if="tab === 'match'">
          <span class="text-theme">{{ tabParse(tab) }}</span>
        </template>
      </q-tab>
      <q-tab name="collect">
        <q-icon size="1.2em" class="pr-lg">
          <template v-if="tab === 'collect'">
            <img src="../assets/icon/heart_pink.svg" />
          </template>
          <template v-else>
            <img src="../assets/icon/heart_gray.svg" />
          </template>
        </q-icon>
        <template v-if="tab === 'collect'">
          <span class="text-theme">{{ tabParse(tab) }}</span>
        </template>
      </q-tab>
      <q-tab name="theme">
        <q-icon size="1.2em" class="pr-lg">
          <template v-if="tab === 'theme'">
            <img src="../assets/icon/palette_pink.svg" />
          </template>
          <template v-else>
            <img src="../assets/icon/palette_gray.svg" />
          </template>
        </q-icon>
        <template v-if="tab === 'theme'">
          <span class="text-theme">{{ tabParse(tab) }}</span>
        </template>
      </q-tab>
      <q-tab name="adoption">
        <q-icon size="1.2em" class="pr-lg">
          <template v-if="tab === 'adoption'">
            <img src="../assets/icon/adoption_pink.svg" />
          </template>
          <template v-else>
            <img src="../assets/icon/adoption_gray.svg" />
          </template>
        </q-icon>
        <template v-if="tab === 'adoption'">
          <span class="text-theme">{{ tabParse(tab) }}</span>
        </template>
      </q-tab>
      <q-tab name="emergency">
        <q-icon size="1.2em" class="pr-lg">
          <template v-if="tab === 'emergency'">
            <img src="../assets/icon/emergency_pink.svg" />
          </template>
          <template v-else>
            <img src="../assets/icon/emergency_gray.svg" />
          </template>
        </q-icon>
        <template v-if="tab === 'emergency'">
          <span class="text-theme">{{ tabParse(tab) }}</span>
        </template>
      </q-tab>
    </q-tabs>
  </q-toolbar>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("match");

const tabParse = (tab) => {
  switch (tab) {
    case "match":
      return "配對";
    case "collect":
      return "收藏";
    case "theme":
      return "主題館";
    case "adoption":
      return "收養";
    case "adoption":
      return "送養";
    case "emergency":
      return "急診";
  }
};
</script>
<style lang="scss" scoped>
:deep {
  .q-tab__indicator {
    opacity: 0;
  }
}
</style>
