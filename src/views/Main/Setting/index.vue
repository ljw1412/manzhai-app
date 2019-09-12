<template>
  <div class="setting">
    图标风格
    <button @click="onChangeThemeClick">主题切换</button>
    <mz-button>123</mz-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Setting extends Vue {
  onChangeThemeClick() {
    const rootDataset = document.documentElement.dataset
    rootDataset.theme = rootDataset.theme ? '' : 'dark'
  }
}
</script>

<style lang="scss" scoped>
</style>
