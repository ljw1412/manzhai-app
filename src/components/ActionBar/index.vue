<template>
  <div class="actionbar">
    <div class="action">标题</div>
    <!-- 标题上的功能菜单 -->
    <actionbar-menu></actionbar-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ActionbarMenu from './Menu.vue'

@Component({
  components: {
    ActionbarMenu
  }
})
export default class ActionBar extends Vue {}
</script>

<style lang="scss">
.actionbar {
  -webkit-app-region: drag;
  user-select: none;
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: #c20c0c;
  // border-bottom: 1px solid #a40011;
}
</style>