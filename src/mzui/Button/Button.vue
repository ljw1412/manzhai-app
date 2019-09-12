<template>
  <button v-ripple="ripple"
    class="mz-button color-transition"
    :class="buttonClasses">
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
  @Prop(String)
  readonly type!: string
  @Prop(String)
  readonly icon!: string
  @Prop([Boolean, Object])
  readonly ripple!: boolean | object

  get buttonClasses() {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    const classes = []
    if (types.includes(this.type)) {
      classes.push(`mz-button--${this.type}`)
    }
    return classes
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.mz-button {
  -webkit-appearance: none;
  box-sizing: border-box;
  border: none;
  // border: 1px solid getColor('border-base');
  border-radius: 4px;
  background-color: getColor('body-background');
  color: getColor('text-regular');
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  line-height: 1;
  outline: none;
  position: relative;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @include bgHover;

  &:not(.mz-button--disabled) {
    will-change: box-shadow;
  }

  &:active {
    border-color: transparent;
    box-shadow: getVar('mz-button', 'shadow');
  }

  &--primary {
    color: getColor('white');
    background-color: getColor('primary');
  }

  &--success {
    color: getColor('white');
    background-color: getColor('success');
  }

  &--warning {
    color: getColor('white');
    background-color: getColor('warning');
  }

  &--danger {
    color: getColor('white');
    background-color: getColor('danger');
  }

  &--info {
    color: getColor('white');
    background-color: getColor('info');
  }

  &--disabled {
  }
}
</style>
