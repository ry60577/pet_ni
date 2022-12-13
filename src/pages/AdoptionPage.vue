<template>
  <div :class="['adoption_wrapper', { 'pw-sm': isMobile, 'pw-xl': !isMobile }]">
    <div class="upload_image_wrap">
      <q-icon size="4em" @click="handleUploadImage">
        <img :src="require(`../assets/icon/add.svg`)" alt="" />
      </q-icon>
      <input type="file" id="upload_file" />
      <span class="text-primary">上傳寵物照片</span>
    </div>
    <!-- <GoogleSignIn /> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
// import GoogleSignIn from "../components/global/GoogleSignIn.vue";

const store = useStore();
const isMobile = store.getters["common/getIsMobile"];
const handleUploadImage = () => {
  upload_file.click();
};
</script>
<style lang="scss" scoped>
.pc_grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.adoption_wrapper {
  .upload_image_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 162px;
    height: 214px;
    background-color: #fff;
    box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
    border-radius: 28px;
    input {
      display: none;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
