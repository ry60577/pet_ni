<template>
  <div
    class="q-pa-md bg-white text-center text_black_1 mobile_header"
    v-show="isMobile"
  >
    寵物名單
  </div>
  <div class="mt-xs collection-list-wrapper">
    <div :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }">
      <div class="text-center ph-sm collect_description" v-show="isMobile">
        快來接我回家吧，我會一直一直陪伴你。
      </div>
      <div class="collect_wrap">
        <template v-for="item in collectList" :key="item.animal_id">
          <CollectCard :animal="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CollectCard from "../components/collect/CollectCard.vue";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const collectList = computed(() =>
  store.getters["animal/getAnimalList"].slice(0, 10)
);
</script>

<style lang="scss" scoped>
.mobile_header {
  position: fixed;
  width: 100%;
  z-index: 2;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1rem;
  box-shadow: 0px 1px 9px rgba(38, 38, 38, 0.05);
}
.collection-list-wrapper {
  .collect_description {
    color: #878787;
  }
  .collect_wrap {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
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
    margin-top: 10%;
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(3, 34%);
    }
  }
}
@media screen and (max-width: 500px) {
  .collection-list-wrapper {
    margin-top: 12%;
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(2, 55%);
    }
  }
}
@media screen and (max-width: 300px) {
  .collection-list-wrapper {
    margin-top: 16%;
    .collect_wrap {
      display: grid;
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>
