<template>
  <div class="actionbar">
    <div class="actionbar__mini-profile"
      @click="toggleSidebar">
      <transition name="zoom">
        <mz-icon v-if="isDisplaySidebar"
          name="md-arrow-back"
          size="24"
          color="#fff"
          key="mini-profile-close"></mz-icon>
        <mz-icon v-else
          name="md-contact"
          size="36"
          color="#fff"
          key="mini-profile-default"></mz-icon>
      </transition>
    </div>
    <div class="action">标题</div>
    <!-- 标题上的功能菜单 -->
    <actionbar-menu></actionbar-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import ActionbarMenu from './Menu.vue'
const layoutModule = namespace('layout')

@Component({
  components: {
    ActionbarMenu
  }
})
export default class ActionBar extends Vue {
  @layoutModule.State('isDisplaySidebar')
  readonly isDisplaySidebar!: boolean
  @layoutModule.Mutation('toggleSidebar')
  readonly toggleSidebar!: Function
}
</script>

<style lang="scss">
@import '@/theme/index.scss';
.actionbar {
  -webkit-app-region: drag;
  user-select: none;
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: $--color-primary;
  // border-bottom: 1px solid #a40011;
  &__mini-profile {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: $--hover-background-color-black;
    }
  }
}
</style>