<template>
  <div class="sidebar-menu">
    <router-link v-for="(item,index) of data"
      class="sidebar-menu__item"
      :to="{name:item.name}"
      :key="index">
      <mz-icon :name="item.icon"
        size="22"></mz-icon>
      <span class="sidebar-menu__label">{{item.label}}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SidebarMenuItem } from '@/types/view.d.ts'
@Component
export default class SidebarMenu extends Vue {
  @Prop({ default: [] })
  readonly data!: SidebarMenuItem[]
}
</script>

<style lang="scss" scoped>
@import '@/theme/index.scss';
.sidebar-menu {
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px 15px;
    margin: 5px 0;
    word-wrap: none;
    word-break: keep-all;
    user-select: none;
    font-size: 18px;

    &.router-link-exact-active {
      color: $--color-primary;
      fill: $--color-primary;
    }

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba($color: $--color-primary, $alpha: 0.5);
      transform-origin: center left;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
    }

    &:not(.router-link-exact-active):hover {
      transition: 0.2s linear;
      color: #fff;
      fill: #fff;
      &::before {
        transform-origin: center left;
        transform: scaleX(1);
      }
    }
  }

  &__label {
    padding-left: 6px;
  }
}
</style>
