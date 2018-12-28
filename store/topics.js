export const state = () => ({
  list: []
})

export const mutations = {
  setTopics(state, topics) {
    state.list = topics;
  }
}

export const actions = {
  setTopics({ commit }, topics) {
    commit('setTopics', topics);
  }
}