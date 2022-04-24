<template>
  <div class="mb-lg mr-xs collect-card-wrapper">
    <div class="image">
      <img :src="animal.album_file" :alt="`PetNi 陪你${animal.animal_title}`" />
    </div>
    <div class="first_row">
      <div class="animal_id">
        {{ animal.animal_id }}
      </div>
      <div>
        <q-icon size="1.5em">
          <template v-if="animal.animal_sex === 'F'">
            <img src="../../assets/icon/female.svg" />
          </template>
          <template v-else>
            <img src="../../assets/icon/male.svg" />
          </template>
        </q-icon>
      </div>
    </div>
    <div class="mt-sm animal_place">
      {{ animal.animal_place }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  animal: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped>
.collect-card-wrapper {
  width: 12rem;
  height: 16.5rem;
  padding: 1.2%;
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
  border-radius: 28px;
  .image {
    img {
      width: 100%;
      height: 10rem;
      border-radius: 28px;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
  .first_row {
    display: flex;
    justify-content: space-between;
  }
  .animal_id {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    color: $dark;
  }
  .animal_place {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 21px;
    color: #878787;
  }
}
</style>
