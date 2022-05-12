<!--- Navigation --->
<template>
  <q-tabs v-model="tab" stretch inline-label>
    <q-tab name="match" @click="router.push('/')">
      <q-icon size="2em">
        <template v-if="tab === 'match'">
          <img src="../assets/icon/card_pink.svg" alt="配對|Petni 陪你" />
        </template>
        <template v-else>
          <img src="../assets/icon/card_gray.svg" alt="配對|Petni 陪你" />
        </template>
      </q-icon>
      <template v-if="tab === 'match' && !isMobile">
        <span class="text-theme">{{ tabParse(tab) }}</span>
      </template>
    </q-tab>
    <q-tab name="collect" @click="router.push('/collect')">
      <q-icon size="1.2em" :class="{ 'pr-lg': !isMobile }">
        <template v-if="tab === 'collect'">
          <img src="../assets/icon/heart_pink.svg" alt="收藏|Petni 陪你" />
        </template>
        <template v-else>
          <img src="../assets/icon/heart_gray.svg" alt="收藏|Petni 陪你" />
        </template>
      </q-icon>
      <template v-if="tab === 'collect' && !isMobile">
        <span class="text-theme">{{ tabParse(tab) }}</span>
      </template>
    </q-tab>
    <q-tab name="theme">
      <q-icon size="1.2em" :class="{ 'pr-lg': !isMobile }">
        <template v-if="tab === 'theme'">
          <img src="../assets/icon/palette_pink.svg" alt="主題館|Petni 陪你" />
        </template>
        <template v-else>
          <img src="../assets/icon/palette_gray.svg" alt="主題館|Petni 陪你" />
        </template>
      </q-icon>
      <template v-if="tab === 'theme' && !isMobile">
        <span class="text-theme">{{ tabParse(tab) }}</span>
      </template>
    </q-tab>
    <q-tab name="adoption">
      <q-icon size="1.2em" :class="{ 'pr-lg': !isMobile }">
        <template v-if="tab === 'adoption'">
          <img src="../assets/icon/adoption_pink.svg" alt="送養|Petni 陪你" />
        </template>
        <template v-else>
          <img src="../assets/icon/adoption_gray.svg" alt="送養|Petni 陪你" />
        </template>
      </q-icon>
      <template v-if="tab === 'adoption' && !isMobile">
        <span class="text-theme">{{ tabParse(tab) }}</span>
      </template>
    </q-tab>
    <q-tab name="emergency" @click="router.push('/emergency')">
      <q-icon size="1.2em" :class="{ 'pr-lg': !isMobile }">
        <template v-if="tab === 'emergency'">
          <img src="../assets/icon/emergency_pink.svg" alt="急診|Petni 陪你" />
        </template>
        <template v-else>
          <img src="../assets/icon/emergency_gray.svg" alt="急診|Petni 陪你" />
        </template>
      </q-icon>
      <template v-if="tab === 'emergency' && !isMobile">
        <span class="text-theme">{{ tabParse(tab) }}</span>
      </template>
    </q-tab>
  </q-tabs>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];

const route = useRoute();
const router = useRouter();
const tab = ref(route.name);
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
  .q-tabs__content {
    display: flex;
    justify-content: space-around;
  }
  .q-tab__indicator {
    opacity: 0;
  }
}
// @media screen and (max-width: 1000px) {
//   :deep {
//     .q-tabs__content {
//       display: flex;
//       justify-content: space-around;
//     }
//   }
// }
</style>
