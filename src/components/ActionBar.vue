<template>
  <div class="actionbar">
    <div class="action">标题</div>
    <div class="actionbar__menu">
      <template v-for="item of menuList">
        <div class="actionbar__menu-item"
          :key="item.action">
          <mz-icon class="actionbar__menu-icon"
            :name="item.name"
            :size="item.size"
            @click="onActionMenuClick(item.action)"></mz-icon>
        </div>
        <span v-if="item.divider"
          class="actionbar__menu-divider"
          :key="'divider-'+item.action"></span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'

@Component
export default class ActionBar extends Vue {
  isMaximize = false
  menuList = [
    { name: 'md-settings', size: 20, action: 'setting', divider: true },
    { name: 'md-remove', size: 24, action: 'minimize' },
    { name: 'md-expand', size: 22, action: 'maximize' },
    { name: 'md-close', size: 24, action: 'close' }
  ]

  get maximizeMenu() {
    return this.menuList.find(item => item.action === 'maximize')
  }

  addIpcListener() {
    ipcRenderer.on('main-relpy', (e, { action, data }, arg) => {
      if (action === 'maximize' && this.maximizeMenu) {
        this.maximizeMenu.name = data ? 'md-contract' : 'md-expand'
      }
    })
  }

  onActionMenuClick(menuType: string) {
    ipcRenderer.send('main', new Message('frameController', menuType))
  }

  created() {
    this.addIpcListener()
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
  &__menu {
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }
  &__menu-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }

  &__menu-divider {
    width: 1px;
    height: 20px;
    margin: 0 5px;
    background-color: rgba($color: #dcdfe6, $alpha: 0.8);
  }

  &__menu-icon {
    fill: #fff;
    cursor: pointer;
    transition-duration: 0.2s;
    -webkit-app-region: no-drag;
    &:hover {
      fill: #0cc20c;
    }
  }
}
</style>