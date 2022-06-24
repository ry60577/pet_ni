<template>
  <div
    class="q-pa-md theme_wrapper"
    :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }"
  >
    <div class="theme_carousel theme_bg">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        :arrows="isMobile"
      >
        <template v-for="theme in themeData" :key="theme">
          <q-carousel-slide :name="theme.name">
            <div class="carousel_card">
              <div class="desc_wrap">
                <h3>{{ theme.chineses_name }}</h3>
                <div class="desc">{{ theme.desc }}</div>
                <q-btn
                  icon-right="search"
                  :label="`搜尋${theme.chineses_name}`"
                />
              </div>
              <img :src="theme.imgUrl" :alt="`${theme.name}|PetNi 陪你`" />
            </div>
          </q-carousel-slide>
        </template>

        <template v-slot:control v-if="!isMobile">
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              square
              dense
              color="white"
              text-color="black"
              icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push
              square
              dense
              color="white"
              text-color="black"
              icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import themeList from "../json_data/theme_data.json";
import { useStore } from "vuex";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const themeData = themeList.map((item) => {
  item.imgUrl = require(`../assets/image/${item.name}.svg`);
  return item;
});
const slide = ref("orange_tabby_cat");
const autoplay = ref(false);
</script>

<style lang="scss" scoped>
.theme_wrapper {
  height: 100vh;
  background-color: #e5e5e5;

  .carousel_card {
    display: grid;
    grid-template-columns: 50% 50%;
    // grid-template-rows: 70% 30%;
    // div:first-child {
    //   order: 2;
    // }
  }
  .theme_bg {
    background-image: url("../assets/image/cat_chineses.svg");
    background-repeat: no-repeat;
    background-position: 60% 20%;
  }
  :deep {
    .q-carousel {
      height: 700px;
      background-color: transparent;
    }
  }
}
</style>
