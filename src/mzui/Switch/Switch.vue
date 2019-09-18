<template>
  <div class="mz-switch"
    :aria-checked="value"
    :class="{'mz-switch--checked':value}"
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
  display: inline-block;
  padding: 2px;
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
    width: 40px;
    height: 20px;
    background-color: getVar(mz-switch, bar-background-color);
    &::after {
      content: '';
      position: absolute;
      left: -1px;
      right: 50%;
      top: -1px;
      bottom: -1px;
      background-color: getVar(mz-switch, thumb-background-color);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.36);
      transition: all 0.2s linear;
    }
  }

  &--checked {
    .mz-switch__core {
      background-color: getVar(mz-switch, bar-background-color, check);
      &::after {
        left: 50%;
        right: -1px;
      }
    }
  }
}
</style>
