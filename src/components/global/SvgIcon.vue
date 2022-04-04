<!-- SvgIcon -->
<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 20,
  },
  height: {
    type: Number,
    default: 20,
  },
});

const iconName = computed(() => `#icon-${props.icon}`);
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon icon-${props.icon} ` + props.className;
  } else {
    return `svg-icon icon-${props.icon}`;
  }
});
</script>

<style lang="scss">
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
