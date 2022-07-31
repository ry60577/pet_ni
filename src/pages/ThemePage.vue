<template>
  <div
    class="q-pa-md theme_wrapper"
    :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }"
  >
    <div class="pet_type">
      <span
        :class="{ unselect: petType === 'dog' }"
        @click="selectPetType('cat')"
        >喵星人</span
      >
      <span
        :class="{ unselect: petType === 'cat' }"
        @click="selectPetType('dog')"
        >汪星人</span
      >
    </div>
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
const petType = ref("cat");
const selectPetType = (type) => {
  petType.value = type;
};
</script>

<style lang="scss" scoped>
.theme_wrapper {
  height: 100%;
  background-color: #e5e5e5;
  .pet_type {
    padding: 4px 0;
    width: 150px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
    border-radius: 10px;
    span {
      padding: 2px 10px;
      &.unselect {
        width: 62px;
        height: 26px;
        color: #fff;
        border-radius: 10px;
        background-color: $dark;
      }
    }
  }

  .carousel_card {
    height: 100%;
    display: grid;
    grid-template-columns: 55% 45%;
    align-items: center;
    h3 {
      margin: 56px 0;
      font-weight: 700;
      font-size: 76px;
      line-height: 27px;
      letter-spacing: 0.374px;
      color: $dark;
    }
    .desc {
      margin: 48px 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.374px;
      color: #878787;
    }
    :deep {
      .q-btn {
        width: 196px;
        height: 46px;
        background-color: #fff;
        box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
        border-radius: 16px;
        .q-btn__content {
          display: flex;
          justify-content: space-around;
          .block {
            margin-right: 20px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: $dark;
          }
        }
      }
      .q-btn .q-icon,
      .q-btn .q-spinner {
        position: absolute;
        right: 10px;
        width: 37px;
        height: 37px;
        color: white;
        border-radius: 16px;
        background-color: #262626;
      }
    }
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
      .q-carousel__control {
        column-gap: 24px;
        display: flex;
        .q-btn {
          width: 42px;
          height: 42px;
          box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
          border-radius: 14px;
        }
      }
    }
  }
}
</style>
