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
    toggleSidebar(state: LayoutState) {
      state.isDisplaySidebar = !state.isDisplaySidebar
    },
    setTitle(state: LayoutState, title: string) {
      state.title = title
    }
  },
  actions: {}
}
