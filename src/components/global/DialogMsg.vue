<template>
  <div>
    <q-dialog v-model="isShowDialog">
      <q-card class="dialog_wrap">
        <q-card-section class="row justify-center items-center">
          確定要刪除我嗎 ？ಥ_ಥ
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            flat
            label="取消"
            color="black"
            @click="showDialogHandler(false)"
          />
          <q-btn
            flat
            label="確定"
            color="primary"
            @click="showDialogHandler(true)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isShowDialog = computed(() => store.getters["common/getIsShowDialog"]);
const showDialogHandler = (status) => {
  store.commit("common/setIsShowDialog", status);
};
</script>

<style lang="scss" scoped>
.dialog_wrap {
  width: 470px;
  max-width: 80vw;
}
.q-dialog__backdrop {
  backdrop-filter: blur(12px);
}
</style>
