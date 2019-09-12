<template>
  <button class="mz-button">
    <span v-if="$slots.default"
      class="mz-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MzIcon from '../Icon/index'
@Component
export default class MzButton extends Vue {
  @Prop(String) readonly icon!: string
}
</script>

<style lang="scss" scoped>
</style>
