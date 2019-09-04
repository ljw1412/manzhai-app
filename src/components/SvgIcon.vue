<template>
  <svg class="svg-icon"
    aria-hidden="true"
    v-on="$listeners"
    :style="svgStyles">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SVGIcon extends Vue {
  @Prop({ required: true })
  readonly name!: string

  @Prop({ default: 20 })
  readonly size!: number

  get iconName() {
    return `#icon-${this.name}`
  }

  get svgStyles() {
    return {
      width: this.size + 'px',
      height: this.size + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
