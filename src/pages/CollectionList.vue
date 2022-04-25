<template>
  <div
    class="collection-list-wrapper"
    :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }"
  >
    <div class="collect_wrap">
      <template v-for="item in collectList" :key="item.animal_id">
        <CollectCard :animal="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CollectCard from "../components/collect/CollectCard.vue";

const store = useStore();
const collectList = computed(() =>
  store.getters["animal/getAnimalList"].slice(0, 10)
);
</script>

<style lang="scss" scoped>
.collection-list-wrapper {
  .collect_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 1366px) {
  .collection-list-wrapper {
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(6, 20%);
    }
  }
}
@media screen and (max-width: 1000px) {
  .collection-list-wrapper {
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(4, 27%);
    }
  }
}
@media screen and (max-width: 700px) {
  .collection-list-wrapper {
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(3, 34%);
    }
  }
}
@media screen and (max-width: 500px) {
  .collection-list-wrapper {
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(2, 55%);
    }
  }
}
@media screen and (max-width: 300px) {
  .collection-list-wrapper {
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>
