<template>
  <div class="mz-switch"
    :aria-checked="value"
    :class="{
      'mz-switch--checked': value,
      'is-pointer': !disabled,
      'is-not-allowed': disabled
    }"
    @click="onSwitchClick">
    <input ref="input"
      type="checkbox"
      class="mz-switch__input"
      :name="name" />
    <div class="mz-switch__core color-transition"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
@Component
export default class MzSwitch extends Vue {
  @Prop(String)
  readonly name!: string
  @Prop(Boolean)
  readonly value!: boolean
  @Prop(Boolean)
  readonly disabled!: boolean
  @Ref('input')
  readonly input!: HTMLInputElement

  onSwitchClick() {
    if (this.disabled) return
    this.$emit('change', !this.value)
    this.$emit('input', !this.value)
    this.input.checked = !this.value
  }

  mounted() {
    this.input.checked = this.value
  }
}
</script>

<style lang="scss" >
@import '@/styles/index.scss';
:root {
  --mz-switch__bar-background-color: #bdc1c6;
  --mz-switch__bar-background-color--check: #{getColor(primary)};
  --mz-switch__thumb-background-color: #ffffff;
}

.mz-switch {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  &__core {
    position: relative;
    width: 45px;
    height: 20px;
    background-color: getVar(mz-switch, bar-background-color);
    border-radius: 2px;
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 20px;
      height: 100%;
      background-color: getVar(mz-switch, thumb-background-color);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px;
      transition: all 0.2s linear;
      transform-origin: left center;
      border-radius: 2px;
      border: 1px solid transparent;
    }
  }

  &:active &__core::after {
    transform: scaleX(1.1);
  }

  &--checked {
    .mz-switch__core {
      background-color: getVar(mz-switch, bar-background-color, check);
      &::after {
        left: calc(100% - 20px);
        transform-origin: right center;
      }
    }
  }
}
</style>
