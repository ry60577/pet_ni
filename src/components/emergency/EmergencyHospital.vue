<!-- EmergencyHospital -->
<template>
  <div class="text_black_1" :class="{ 'pw-sm': isMobile, 'pw-xl': !isMobile }">
    <div v-show="!isMobile">
      <LocationTab :class="{ pc_center: !isMobile }" />
    </div>
    <div :class="{ pc_center: !isMobile, pc_position_end: isMobile }">
      *資訊來源：
      <a href="https://www.afurkid.com/Veterinary/List"
        >Afurkid 毛小孩寵物資訊。
      </a>
    </div>
    <div
      class="mb-lg"
      :class="{ pc_center: !isMobile, pc_position_end: isMobile }"
    >
      *資訊僅供參考，建議先電話聯絡再前往。
    </div>
    <template v-for="(lists, index) in emergencyList" :key="index">
      <div class="text_black_1 city_name">
        <img src="../../assets/icon/map_pin_pink.svg" class="mr-xxs" />{{
          lists.city
        }}
      </div>
      <div
        class="hospital_list"
        :class="{
          'mb-xs': !isMobile,
          'mb-lg': isMobile,
        }"
      >
        <template v-for="item in lists.list" :key="item.VeterinaryId">
          <HospitalCard :hospital="item" />
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useAnimal } from "../../conposable/useAnimal";
import LocationTab from "components/emergency/LocationTab.vue";
import HospitalCard from "components/emergency/HospitalCard.vue";
import YarnBallLoading from "../../../public/yarn_ball_loading.json";

const { getEmergencyList } = useAnimal();
onBeforeMount(async () => {
  await getEmergencyList();
});
const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const emergencyList = computed(
  () => store.getters["animal/getEmergencyFilterList"]
);
</script>

<style lang="scss" scoped>
.pc_center {
  display: flex;
  justify-content: center;
}
.pc_position_end {
  display: flex;
  justify-content: flex-end;
}
.pc_padding {
  padding-left: 13%;
}
.city_name {
  display: flex;
  align-items: center;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: 0.374px;
}
.hospital_list {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 400px) {
  .hospital_list {
    justify-content: center;
  }
}
</style>
