<template>
  <div class="mz-cell color-transition">
    <div class="mz-cell__core flex-center-space-between">
      <div class="mz-cell__left">
        <slot>
          <div v-if="$slots.default || title"
            class="mz-cell__title color-transition">
            <slot name="title">{{title}}</slot>
          </div>
          <div v-if="$slots.desc || desc"
            class="mz-cell__desc color-transition">
            <slot name="desc">{{desc}}</slot>
          </div>
        </slot>
      </div>
      <div class="mz-cell__right"
        :class="{
          'mz-cell__right--switch': !$slots.right && hasSwitch
        }">
        <slot name="right">
          <mz-switch v-if="hasSwitch"
            v-model="theValue"
            @change="onValueChange"></mz-switch>
        </slot>
      </div>
    </div>
    <div v-if="$slots.child"
      class="mz-cell__child">
      <slot name="child"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import MzSwitch from '../Switch/index'

@Component({
  components: {
    MzSwitch
  }
})
export default class MzCell extends Vue {
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly desc!: string
  @Prop(Boolean)
  readonly hasSwitch!: boolean
  @Prop(Boolean)
  readonly value!: boolean

  theValue: boolean = false

  @Watch('value')
  onValueChange(val: boolean) {
    this.theValue = val
  }

  @Watch('theValue')
  onTheValueChange(val: boolean) {
    this.$emit('change', val)
    this.$emit('input', val)
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.mz-cell {
  position: relative;
  & + & {
    border-top: 1px solid getColor(border-base);
  }
  &__core {
    padding: 10px 20px;
    min-height: 37px;
  }

  &__title {
    font-size: 13px;
    color: getColor(text-primary);
  }

  &__desc {
    font-size: 12px;
    color: getColor(text-secondary);
  }

  &__title + &__desc {
    margin-top: 2px;
  }

  &__right {
    flex-shrink: 0;

    &--switch {
      padding-left: 20px;
    }
  }

  &__child > & {
    padding-left: 30px;
  }
}
</style>
