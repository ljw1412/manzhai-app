<template>
  <div class="sidebar-menu"
    :class="{'sidebar-menu--icon': !showLabel}">
    <router-link v-for="(item,index) of data"
      class="sidebar-menu__item color-transition"
      v-ripple
      :to="{name:item.name}"
      :key="index">
      <mz-icon :name="item.icon"
        size="22"></mz-icon>
      <span v-show="showLabel"
        class="sidebar-menu__label">{{item.label}}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class SidebarMenu extends Vue {
  @Prop({ default: [] })
  readonly data!: SidebarMenuItem[]
  @Prop(Boolean)
  readonly showLabel!: boolean
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
:root {
  --sidebar-menu__color: #ffffff;
  --sidebar-menu__color--hover: #86e186;
  --sidebar-menu__color--active: #0cc20c;
}

.sidebar-menu {
  &__item {
    -webkit-app-region: no-drag;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px 16px;
    word-wrap: none;
    word-break: keep-all;
    font-size: 18px;
    color: var(--sidebar-menu__color);
    fill: var(--sidebar-menu__color);
    transition: all 0.3s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 0.2s linear;
      z-index: -1;
    }

    &:hover::before {
      opacity: 0.08;
    }
    &:focus::before {
      opacity: 0.16;
    }

    &.router-link-exact-active {
      color: var(--sidebar-menu__color--active);
      fill: var(--sidebar-menu__color--active);
    }
  }

  &--icon &__item {
    padding: 10px 14px;
  }

  &__label {
    padding-left: 15px;
  }
}
</style>
