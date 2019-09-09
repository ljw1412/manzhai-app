<template>
  <div class="actionbar-menu">
    <template v-for="item of menuList">
      <div class="actionbar-menu__item flex-double-center"
        :key="item.action">
        <mz-icon class="actionbar-menu__icon"
          :name="item.name"
          :size="item.size"
          @click="onActionMenuClick(item)"></mz-icon>
      </div>
      <span v-if="item.divider"
        class="actionbar-menu__divider"
        :key="'divider-'+item.action"></span>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'

@Component
export default class ActionbarMenu extends Vue {
  @Prop(Boolean)
  readonly onlyBase!: boolean
  menuList: ActionBarMenuItem[] = [
    {
      name: 'md-settings',
      size: 20,
      action: 'setting',
      route: { name: 'setting' },
      divider: true
    }
  ]
  // 基础功能菜单
  baseMenuList: ActionBarMenuItem[] = [
    { name: 'md-remove', size: 24, action: 'minimize' },
    { name: 'md-expand', size: 22, action: 'maximize' },
    { name: 'md-close', size: 24, action: 'close' }
  ]

  get maximizeMenu() {
    return this.menuList.find(item => item.action === 'maximize')
  }
  /**
   * 点击功能菜单时事件
   * @param item 菜单对象
   */
  onActionMenuClick(item: ActionBarMenuItem) {
    if (item.route) {
      this.$router.replace(item.route)
      return
    }
    ipcRenderer.send('main', new Message('frameController', item.action))
  }

  initMenu() {
    this.menuList = this.onlyBase
      ? this.baseMenuList
      : this.menuList.concat(this.baseMenuList)
  }

  addIpcListener() {
    ipcRenderer.on('main-relpy', (e, { action, data }, arg) => {
      if (action === 'maximize' && this.maximizeMenu) {
        this.maximizeMenu.name = data ? 'md-contract' : 'md-expand'
      }
    })
  }

  created() {
    this.initMenu()
    this.addIpcListener()
  }
}
</script>

<style lang="scss">
@import '@/theme/index.scss';
.actionbar-menu {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  &__item {
    position: relative;
    width: 30px;
    height: 30px;
  }
  &__divider {
    width: 1px;
    height: 20px;
    margin: 0 5px;
    background-color: getColor(border-base);
    opacity: 0.8;
  }
  &__icon {
    fill: getColor(actionbar-menu);
    cursor: pointer;
    transition-duration: 0.2s;
    -webkit-app-region: no-drag;
    &:hover {
      fill: getColor(actionbar-menu-hover);
    }
    &:active {
      fill: getColor(actionbar-menu-active);
    }
  }
}
</style>
