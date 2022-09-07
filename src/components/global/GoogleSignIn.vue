<template>
  <div id="google_signIn">123</div>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  window.gapi.signin2.render("google_signIn", {
    scope: "profile email",
    width: this.width,
    height: this.height,
    longtitle: true,
    theme: "light",
    onsuccess: this.signIn,
    onfailure: () => {},
  });
});
</script>
