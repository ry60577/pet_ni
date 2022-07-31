<!-- HospitalCard -->
<template>
  <div class="mr-xs mb-xs text_black_1 hospital_card_wrapper">
    <div class="hospital_info">
      <div class="ellipsis hospital_name">
        {{ hospital.Name }}
      </div>
      <div class="phone">
        {{ tel }}
      </div>
      <div class="ellipsis address">
        {{ hospital.Address }}
      </div>
    </div>
    <div class="hospital_call">
      <div class="text-primary epidemic">*疫情期間有開</div>
      <div>
        <q-icon size="2.5em">
          <a :href="phoneCall">
            <img src="../../assets/icon/phone_call.svg" />
          </a>
        </q-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  hospital: {
    type: Object,
  },
});
const _tel = props.hospital.Tel.replace(/[(]/gi, "");
const tel = _tel.replace(/[)]/gi, "-");
const phoneCall = ref(`tel:+886-${tel.substr(1, tel.length)}`);
</script>

<style lang="scss" scoped>
.hospital_card_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px;
  min-width: 328px;
  // width: calc(100% / 4.2);
  height: 104px;
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
  border-radius: 20px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  font-size: 0.9rem;
  .hospital_info {
    max-width: 70%;
    .hospital_name {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.5rem;
    }
    .phone {
      font-family: "Roboto";
      line-height: 2rem;
    }
    .address {
      font-size: 14px;
    }
  }
  .hospital_call {
    text-align: right;
    .epidemic {
      margin-bottom: 12%;
    }
  }
}
@media screen and (max-width: 1920px) {
  .hospital_card_wrapper {
    width: calc(100% / 4.2);
  }
}
@media screen and (max-width: 1700px) {
  .hospital_card_wrapper {
    width: calc(100% / 3.2);
  }
}
@media screen and (max-width: 1000px) {
  .hospital_card_wrapper {
    width: calc(100% / 2.05);
  }
}
@media screen and (max-width: 600px) {
  .hospital_card_wrapper {
    width: 100%;
  }
}
</style>
