<!-- EntryAnimation -->
<template>
  <div class="entry_wrapper">
    <img src="../../assets/petnilogo.gif" alt="Pet Ni 陪你" />
    <div class="copy_right">PetNi © Code: Astrid Chen / Design: K.T</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.replace({ path: "/" });
  }, 3000);
});
</script>
<style lang="scss" scoped>
.entry_wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .copy_right {
    position: fixed;
    bottom: 0;
  }
}
</style>
