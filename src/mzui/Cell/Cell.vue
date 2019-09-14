<template>
  <div class="mz-cell-wrapper color-transition">
    <div class="mz-cell flex-center-space-between">
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
      <div class="mz-cell__right"></div>
    </div>
    <div v-if="$slots.child"
      class="mz-cell__child">
      <slot name="child"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MzCell extends Vue {
  @Prop(String)
  readonly title!: string
  @Prop(String)
  readonly desc!: string
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.mz-cell-wrapper {
  position: relative;
  & + & {
    border-top: 1px solid getColor(border-base);
  }
}

.mz-cell {
  padding: 10px 20px;

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
  }

  &__child > .mz-cell-wrapper {
    padding-left: 30px;
  }
}
</style>
