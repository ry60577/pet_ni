<!-- LocationTab -->
<template>
  <div class="q-pa-md emergency">
    <div class="text-black-1" v-show="isMobile">
      24H<span class="no_show">急診</span>
    </div>
    <div class="q-gutter-sm">
      <q-btn
        :color="location === 'north' ? 'primary' : 'secondary'"
        :text-color="location === 'north' ? 'white' : 'dark'"
        label="北部"
        unelevated
        @click="changeLoation('north')"
      />
      <q-btn
        :color="location === 'middle' ? 'primary' : 'secondary'"
        :text-color="location === 'middle' ? 'white' : 'dark'"
        label="中部"
        unelevated
        @click="changeLoation('middle')"
      />
      <q-btn
        :color="location === 'south' ? 'primary' : 'secondary'"
        :text-color="location === 'south' ? 'white' : 'dark'"
        label="南部"
        unelevated
        @click="changeLoation('south')"
      />
      <q-btn
        :color="location === 'east' ? 'primary' : 'secondary'"
        :text-color="location === 'east' ? 'white' : 'dark'"
        label="東部"
        unelevated
        @click="changeLoation('east')"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useAnimal } from "../../conposable/useAnimal";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];

const { setEmergencyLocation, getEmergencyFilterList } = useAnimal();
const location = ref("north");
/**
 * 北部：台北、新北、桃園、新竹、苗栗
 * 中部：台中、彰化、雲林、南投
 * 南部：嘉義、台南、高雄、屏東
 * 東部：宜蘭、花蓮、台東
 */
const changeLoation = async (val) => {
  location.value = val;
  await setEmergencyLocation(val);
  await getEmergencyFilterList();
};
</script>

<style scoped>
.emergency {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 400px) {
  .no_show {
    display: none;
  }
}
</style>
