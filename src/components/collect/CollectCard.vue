<template>
  <div class="collect-card-wrapper" :class="{ 'mr-xs': !isMobile }">
    <div class="collect-card-wrap">
      <div class="image_wrap">
        <template v-if="animal.album_file === ''">
          <div class="image">
            <img
              src="../../assets/icon/bone.svg"
              v-show="animal.animal_kind === '狗'"
              alt="狗|Petni 陪你"
            />
            <img
              src="../../assets/icon/fish_bone.svg"
              v-show="animal.animal_kind === '貓'"
              alt="貓|Petni 陪你"
            />
            <div class="text_gray_2 default_text">Oops！圖片暫時遺失</div>
          </div>
        </template>
        <template v-else>
          <img
            class="image"
            :src="animal.album_file"
            :alt="`${animal.animal_title}|PetNi 陪你`"
          />
        </template>
        <button class="bg-white delete_btn" @click="showDialogHandler">
          <img src="../../assets/icon/times.svg" />
        </button>
      </div>
      <div class="first_row">
        <div class="animal_id">
          {{ animal.animal_id }}
        </div>
        <q-icon size="1.5em">
          <template v-if="animal.animal_sex === 'F'">
            <img src="../../assets/icon/female.svg" alt="female|Petni 陪你" />
          </template>
          <template v-else>
            <img src="../../assets/icon/male.svg" alt="male|Petni 陪你" />
          </template>
        </q-icon>
      </div>
      <div class="mt-sm animal_place">
        {{ animal.shelter_address.slice(0, 6) }}
      </div>
    </div>
    <DialogMsg />
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  animal: {
    type: Object,
  },
});

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const confirm = computed(() => store.getters["common/getIsShowDialog"]);
const showDialogHandler = () => {
  store.commit("common/setIsShowDialog", !confirm.value);
};
</script>
<style lang="scss" scoped>
.collect-card-wrapper {
  max-width: 12rem;
  width: 100%;
  .collect-card-wrap {
    padding: 0.5rem;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
    border-radius: 28px;
    .image_wrap {
      position: relative;
      .image {
        width: 100%;
        height: 10rem;
        background-color: $secondary;
        border-radius: 28px;
        transform: matrix(1, 0, 0, 1, 0, 0);
        .default_text {
          position: absolute;
          font-size: 0.9rem;
          top: 78%;
          left: 10%;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 28px;
          transform: matrix(1, 0, 0, 1, 0, 0);
        }
      }
      .delete_btn {
        position: absolute;
        top: 5%;
        right: 6%;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        img {
          width: 50%;
          height: 50%;
        }
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
}
@media screen and (max-width: 1366px) {
  .collect-card-wrapper {
    max-width: 11rem;
  }
}
@media screen and (max-width: 800px) {
  .collect-card-wrapper {
    max-width: 9.6rem;
  }
}
</style>
