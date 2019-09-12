<template>
  <div class="sidebar not-user-select"
    :class="{'sidebar--hide' :!isDisplaySidebar}">
    <div class="sidebar__header color-transition">
      <div v-ripple
        class="sidebar__close is-circle flex-double-center color-transition">
        <mz-icon name="md-arrow-back"
          size="24"
          key="mini-profile-close"></mz-icon>
      </div>
    </div>
    <sidebar-menu :data="menuList"></sidebar-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import SidebarMenu from './Menu.vue'
const layoutModule = namespace('layout')

@Component({
  components: {
    SidebarMenu
  }
})
export default class Sidebar extends Vue {
  @layoutModule.State('isDisplaySidebar')
  readonly isDisplaySidebar!: boolean
  @layoutModule.Mutation('toggleSidebar')
  readonly toggleSidebar!: Function
  menuList: SidebarMenuItem[] = [
    { label: '主页', icon: 'md-home', name: 'home', order: 10 },
    { label: '收藏', icon: 'md-heart', name: 'favourite', order: 20 }
  ]
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  height: 100%;
  z-index: 1;
  box-sizing: border-box;
  box-shadow: -5px 0 10px getColor(primary);
  background-color: getColor(primary);
  transition: all 0.3s linear;
  overflow: hidden;
  &--hide {
    width: 0;
  }

  &__header {
    height: 180px;
  }

  &__close {
    -webkit-app-region: no-drag;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: getColor(actionbar-menu);
    fill: getColor(actionbar-menu);
  }
}
</style>
