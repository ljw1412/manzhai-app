<template>
  <div id="app">
    <sidebar></sidebar>
    <main :class="{ 'has-sidebar': isDisplaySidebar }">
      <action-bar></action-bar>
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
  width: 100%;
  transition: all 0.3s linear;
  margin-left: auto;
  margin-right: 0;
  &.has-sidebar {
    width: calc(100% - 256px);
  }
}
</style>
