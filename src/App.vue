<template>
  <div id="app">
    <action-bar></action-bar>
    <router-view />
  </div>
</template>

<script lang="ts">
import ActionBar from '@/components/ActionBar.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ActionBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
