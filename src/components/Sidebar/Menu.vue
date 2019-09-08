<template>
  <div class="sidebar-menu">
    <div v-for="(item,index) of data"
      class="sidebar-menu__item"
      :key="index">
      <span>{{item.label}}</span>
    </div>
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
.sidebar-menu {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
  }
  &__item {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px;
    word-wrap: none;
    word-break: keep-all;
  }
}
</style>
