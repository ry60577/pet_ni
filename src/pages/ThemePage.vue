<template>
  <div
    :class="[
      'q-pa-md',
      'theme_wrapper',
      { 'pd-mobile': isMobile, 'pw-xl': !isMobile },
    ]"
  >
    <div :class="{ pet_type_wrap: isMobile }">
      <div
        :class="[
          'pet_type',
          { pet_type_pc: !isMobile, pet_type_mobile: isMobile },
        ]"
      >
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
    </div>
    <div
      :class="[
        'theme_carousel',
        'theme_bg',
        {
          theme_bg_cat: petType === 'cat' && !isMobile,
          theme_bg_dog: petType === 'dog' && !isMobile,
        },
      ]"
    >
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        :arrows="isMobile"
      >
        <q-carousel-slide
          v-for="theme in themeData"
          :key="theme.name"
          :name="theme.name"
        >
          <div
            :class="[
              'carousel_card',
              { carousel_card_pc: !isMobile, carousel_card_mobile: isMobile },
            ]"
          >
            <div class="desc_wrap">
              <h3>{{ theme.chineses_name }}</h3>
              <div class="desc">{{ theme.desc }}</div>
              <div class="search_btn">
                <q-btn
                  icon-right="search"
                  :label="`搜尋${theme.chineses_name}`"
                />
              </div>
            </div>
            <div :class="{ image_wrap: isMobile }">
              <img :src="theme.imgUrl" :alt="`${theme.name}|PetNi 陪你`" />
            </div>
          </div>
        </q-carousel-slide>

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
import { ref, watch } from "vue";
import themeList from "../json_data/theme_data.json";
import { useStore } from "vuex";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const slide = ref("orange_tabby_cat");
const autoplay = ref(false);
const petType = ref("cat");
const selectPetType = (type) => {
  petType.value = type;
};
themeList = themeList.map((item) => {
  item.imgUrl = require(`../assets/image/${item.name}.svg`);
  return item;
});
const filterThemeData = () => {
  return themeList.filter((item) => {
    return item.name.includes(petType.value);
  });
};
const themeData = ref(filterThemeData());
const windowHeight = ref(`${window.innerHeight}px;`);
watch(
  () => petType.value,
  (val) => {
    themeData.value = filterThemeData();
    const data = themeData.value.find((item) =>
      item.name.includes(petType.value)
    );
    slide.value = data.name;
  }
);
</script>

<style lang="scss" scoped>
.theme_wrapper {
  height: 100%;
  background-color: #e5e5e5;
  &.pd-mobile {
    padding: 0;
  }
  .pet_type_wrap {
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  .pet_type {
    &.pet_type_pc {
      position: absolute;
      right: 5%;
      top: 12%;
      z-index: 1;
    }
    padding: 4px 0;
    width: 150px;
    box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
    border-radius: 10px;
    text-align: center;
    background-color: #fff;
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
  .theme_carousel {
    height: 100%;
  }
  .carousel_card {
    height: 100%;
    &.carousel_card_pc {
      display: grid;
      grid-template-columns: 57% 43%;
      align-items: center;
      h3 {
        margin: 56px 0;
        font-size: 76px;
      }
      .desc {
        margin: 48px 0;
        width: 307px;
      }
    }
    &.carousel_card_mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .desc_wrap {
        order: 2;
        .desc {
          margin-top: 7px;
          margin-bottom: 11px;
        }
        h3 {
          font-size: 20px;
        }
        .search_btn {
          display: flex;
          justify-content: center;
        }
      }
    }
    .image_wrap {
      margin-top: 10%;
      img {
        height: 100%;
      }
    }
    h3 {
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0.374px;
      color: $dark;
    }
    .desc {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.374px;
      color: #878787;
    }
    :deep {
      .search_btn {
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
          background-color: $dark;
        }
      }
    }
  }
  .theme_bg {
    background-repeat: no-repeat;
    background-position: 60% 20%;
    &.theme_bg_cat {
      background-image: url("../assets/image/cat_chineses.svg");
    }
    &.theme_bg_dog {
      background-image: url("../assets/image/dog_chineses.svg");
    }
  }
  :deep {
    .q-carousel {
      height: 100%;
      background-color: transparent;
      .q-carousel__control {
        column-gap: 24px;
        display: flex;
        .q-btn {
          width: 42px;
          height: 42px;
          color: $dark;
          background-color: #fff;
          box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
          border-radius: 14px;
        }
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .theme_wrapper {
    height: calc(100vh - 83px);
  }
}
@media screen and (max-width: 900px) {
  .pet_type_wrap {
    height: 92px;
  }
}
@media screen and (max-width: 500px) {
  .pet_type_wrap {
    height: 62px;
  }
}
</style>
