<template>
  <div class="actionbar flex-center-space-between not-user-select color-transition">
    <div class="actionbar__mini-profile flex-double-center color-transition"
      @click="toggleSidebar">
      <transition name="zoom">
        <mz-icon v-if="isDisplaySidebar"
          name="md-arrow-back"
          size="24"
          key="mini-profile-close"></mz-icon>
        <mz-icon v-else
          name="md-contact"
          size="36"
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
@import '@/styles/index.scss';
.actionbar {
  -webkit-app-region: drag;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: getColor(primary);
  &__mini-profile {
    -webkit-app-region: no-drag;
    width: 50px;
    height: 50px;
    cursor: pointer;
    fill: getColor(white);
    &:hover {
      background-color: getColor(hover-background-w);
    }
  }

  &__title {
    color: getColor(white);
  }
}
</style>