<template>
  <lottie-player
    mode="normal"
    autoplay
    loop
    :src="yarnBallLoading"
    style="width: 270px"
  ></lottie-player>
</template>

<script setup>
import "@lottiefiles/lottie-player";

const yarnBallLoading = JSON.stringify(
  require("../../assets/animation/yarn_ball_loading.json")
);
</script>
