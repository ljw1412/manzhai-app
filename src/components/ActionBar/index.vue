<template>
  <div class="actionbar flex-center-space-between not-user-select color-transition">
    <div class="actionbar__placeholder"></div>
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

  &__title {
    color: getColor(actionbar-menu);
  }
}
</style>