<template>
  <div class="sidebar-menu">
    <router-link v-for="(item,index) of data"
      class="sidebar-menu__item color-transition"
      v-ripple
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
@Component
export default class SidebarMenu extends Vue {
  @Prop({ default: [] })
  readonly data!: SidebarMenuItem[]
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.sidebar-menu {
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px 16px;
    margin: 5px 0;
    word-wrap: none;
    word-break: keep-all;
    font-size: 18px;
    color: getColor(sidebar-menu);
    fill: getColor(sidebar-menu);

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
    }

    &:hover::before {
      opacity: 0.08;
    }
    &:focus::before {
      opacity: 0.16;
    }

    &.router-link-exact-active {
      color: getColor(sidebar-menu-active);
      fill: getColor(sidebar-menu-active);
    }
  }

  &__label {
    padding-left: 15px;
  }
}
</style>
