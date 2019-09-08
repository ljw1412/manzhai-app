<template>
  <div class="actionbar not-user-select flex-center-space-between">
    <div class="actionbar__mini-profile flex-double-center"
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
    <div class="actionbar__title">{{title}}</div>
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
  @layoutModule.State('title')
  readonly title!: string
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
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: $--color-primary;
  // border-bottom: 1px solid #a40011;
  &__mini-profile {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: $--hover-background-color-black;
    }
  }

  &__title {
    color: $--color-white;
  }
}
</style>