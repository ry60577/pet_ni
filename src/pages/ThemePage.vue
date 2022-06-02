<template>
  <div
    class="q-pa-md theme_wrapper"
    :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }"
  >
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide
        v-for="theme of themeData"
        :key="theme.name"
        :img-src="require(theme.imgUrl)"
      >
        <!-- <ThemeCard :theme="theme" /> -->
      </q-carousel-slide>
      <!-- <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      /> -->

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
        >
          <q-toggle
            dense
            dark
            color="orange"
            v-model="autoplay"
            label="Auto Play"
          />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import themeList from "../json_data/theme_data.json";
import ThemeCard from "../components/ThemeCard.vue";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const themeData = themeList.map((item) => {
  item.imgUrl = `../assets/image/${item.name}.svg`;
});

const slide = ref(themeData.at(0).name);
const autoplay = ref(false);
</script>

<style lang="scss" scoped>
.theme_wrapper {
  background-color: #e5e5e5;
}
</style>
