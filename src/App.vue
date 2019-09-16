<template>
  <div id="app"
    class="color-transition">
    <action-bar></action-bar>
    <sidebar></sidebar>
    <main :class="{ 'has-sidebar': isDisplaySidebar }">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import ActionBar from '@/components/ActionBar/index.vue'
import Sidebar from '@/components/Sidebar/index.vue'

const layoutModule = namespace('layout')

@Component({
  components: {
    Sidebar,
    ActionBar
  }
})
export default class App extends Vue {
  @layoutModule.State('isDisplaySidebar')
  readonly isDisplaySidebar!: boolean
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

#app > main {
  box-sizing: border-box;
  width: calc(100% - 50px);
  max-height: calc(100% - 50px);
  padding: 10px;
  margin-left: auto;
  margin-right: 0;
  overflow-y: auto;
  transition: all 0.3s linear;

  &.has-sidebar {
    width: calc(100% - #{getVar('sidebar', 'width')});
    min-width: calc(100% - #{getVar('sidebar', 'max-width')});
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
    &-corner {
      background-color: transparent;
    }
    // 滚动条上的滚动滑块
    &-thumb {
      border: 2px solid transparent;
      background-clip: padding-box;
      background-color: getColor(primary);
      &:active {
        border: 0;
      }
    }
  }
}
</style>
