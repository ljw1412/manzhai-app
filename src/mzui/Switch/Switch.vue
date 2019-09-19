<template>
  <div class="mz-switch"
    :aria-checked="value"
    :class="{
      'mz-switch--checked': value,
      'mz-switch--disabled': disabled,
      'is-pointer': !disabled,
      'is-not-allowed': disabled
    }"
    @click="onSwitchClick">
    <input ref="input"
      type="checkbox"
      class="mz-switch__input"
      :name="name" />
    <div class="mz-switch__core color-transition">
      <div class="mz-switch__thumb">
        <mz-icon v-if="icon"
          :name="icon"
          :color="iconColor"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import MzIcon from '../Icon/index'
@Component({
  components: {
    MzIcon
  }
})
export default class MzSwitch extends Vue {
  @Prop(String)
  readonly name!: string
  @Prop(Boolean)
  readonly value!: boolean
  @Prop(Boolean)
  readonly disabled!: boolean
  @Prop(String)
  readonly activeIcon!: string
  @Prop(String)
  readonly inactiveIcon!: string
  @Prop(String)
  readonly iconColor!: string
  @Ref('input')
  readonly input!: HTMLInputElement

  get icon() {
    return this.disabled
      ? 'md-lock'
      : this.value
      ? this.activeIcon
      : this.inactiveIcon
  }

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
  --mz-switch__bar-box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px;
  --mz-switch__bar-background-color: #bdc1c6;
  --mz-switch__bar-background-color--check: #{getColor(primary)};
  --mz-switch__thumb-background-color: #ffffff;
  --mz-switch__thumb-box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px;
}

.mz-switch {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 1px;
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
    box-shadow: getVar(mz-switch, bar-box-shadow);
    border-radius: 2px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  &__thumb {
    position: absolute;
    top: -1px;
    left: 0;
    width: 20px;
    height: 100%;
    background-color: getVar(mz-switch, thumb-background-color);
    box-shadow: getVar(mz-switch, thumb-box-shadow);
    transition: all 0.2s linear;
    transform-origin: left center;
    border-radius: 2px;
    border: 1px solid transparent;
  }

  &:not(&--disabled):active &__thumb {
    transform: scaleX(1.1);
  }

  &--checked {
    .mz-switch {
      &__core {
        background-color: getVar(mz-switch, bar-background-color, check);
      }
      &__thumb {
        left: calc(100% - 20px);
        transform-origin: right center;
      }
    }
  }

  &--disabled {
    .mz-switch {
      &__core {
        &::before {
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
