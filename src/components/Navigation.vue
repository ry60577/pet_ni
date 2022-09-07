<!--- Navigation --->
<template>
  <q-tabs v-model="tab" stretch inline-label>
    <q-tab
      v-for="navi in navigate"
      :key="navi.key"
      :name="navi.name"
      @click="router.push(navi.route)"
    >
      <q-icon size="2em">
        <img
          :src="
            tab === navi.key
              ? require(`../assets/icon/${navi.key}_pink.svg`)
              : require(`../assets/icon/${navi.key}_gray.svg`)
          "
          :alt="`${navi.name}|Petni 陪你`"
        />
      </q-icon>
      <span></span>
      <span class="text-primary" v-show="tab === navi.key && !isMobile">
        {{ navi.name }}
      </span>
    </q-tab>
  </q-tabs>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "vuex";
import navigate from "../json_data/navigate.json";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];

const route = useRoute();
const router = useRouter();
const tab = ref(route.name);
onBeforeRouteUpdate((to) => {
  tab.value = to.name;
});
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
  span {
    margin-left: 5px;
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
