interface LayoutState {
  isDisplaySidebar: boolean
  title: string
}

export default {
  namespaced: true,
  state: {
    isDisplaySidebar: false,
    title: '漫宅'
  },
  mutations: {
    toggleSidebar(state: LayoutState, isDisplaySidebar: boolean | undefined) {
      if (isDisplaySidebar === undefined) {
        state.isDisplaySidebar = !state.isDisplaySidebar
        return
      }
      state.isDisplaySidebar = isDisplaySidebar
    },
    setTitle(state: LayoutState, title: string) {
      state.title = title
    }
  },
  actions: {}
}
