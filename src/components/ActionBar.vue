<template>
  <div class="actionbar">
    <div class="action">标题</div>
    <div class="action-menu">
      <div class="action-menu__item">
        <mz-icon name="md-remove"
          class="menu-icon"
          size="24"
          @click="onActionMenuClick('minimize')"></mz-icon>
      </div>
      <div class="action-menu__item">
        <mz-icon name="md-expand"
          class="menu-icon"
          size="22"
          @click="onActionMenuClick('maximize')"></mz-icon>
      </div>
      <div class="action-menu__item">
        <mz-icon name="md-close"
          class="menu-icon"
          size="24"
          @click="onActionMenuClick('close')"></mz-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'

@Component
export default class ActionBar extends Vue {
  onActionMenuClick(menuType: string) {
    ipcRenderer.send('main', new Message('frameController', menuType))
  }
}
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

.action-menu {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }
}

.menu-icon {
  fill: #fff;
  transition-duration: 0.2s;
  &:hover {
    fill: #0cc20c;
  }
}
</style>