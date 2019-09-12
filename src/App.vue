<template>
  <div id="app"
    class="color-transition">
    <action-bar></action-bar>
    <main :class="{ 'has-sidebar': isDisplaySidebar }">
      <sidebar></sidebar>
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
  width: calc(100% - 50px);
  transition: all 0.3s linear;
  margin-left: auto;
  margin-right: 0;

  &.has-sidebar {
    width: calc(100% - #{getVar('sidebar', 'width')});
    min-width: calc(100% - #{getVar('sidebar', 'max-width')});
  }
}
</style>
