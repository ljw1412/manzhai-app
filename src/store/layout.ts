interface LayoutState {
  isDisplaySidebar: boolean
}

export default {
  namespaced: true,
  state: {
    isDisplaySidebar: false
  },
  mutations: {
    toggleSidebar(state: LayoutState) {
      state.isDisplaySidebar = !state.isDisplaySidebar
    }
  },
  actions: {}
}
